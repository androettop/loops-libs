# syntax=docker/dockerfile:1

## DEV STAGE
FROM node:16-alpine AS dev

ARG UID=1000
ARG GID=1000
ARG ssh_key_private

# Change node uid and gid to host ids 
RUN apk --no-cache add shadow && \
    usermod -u $UID node && \
    groupmod -g $GID node

WORKDIR /dist

# Copy package.json 
COPY --chown=node package.json ./
COPY --chown=node yarn.lock ./

# Add new packages here
COPY --chown=node packages/docs/package.json ./packages/docs/
COPY --chown=node packages/hooks/package.json ./packages/hooks/
COPY --chown=node packages/ui/package.json ./packages/ui/
COPY --chown=node packages/generator-loops/package.json ./packages/generator-loops/

RUN chown node:node /dist

# Set default user for development
USER node:node

# Configure user keys
RUN mkdir -p "/home/node/.ssh/"
RUN echo "$ssh_key_private" > "/home/node/.ssh/id_rsa"
RUN chmod 600 "/home/node/.ssh/id_rsa"

# Set custom registry
# RUN yarn config set registry http://custom-registry.com:4872

# Install dependencies & remove unnecesary cache to decrease image size
RUN yarn install --verbose && yarn cache clean 

COPY --chown=node . .

EXPOSE 3000

ENTRYPOINT [ "/dist/start.sh" ]  


## BUILDING STAGE FOR PRODUCTION
FROM dev AS preprod

RUN mkdir -p /dist/packages/docs/public

RUN yarn build


## PRODUCTION STAGE
FROM node:16-alpine

RUN npm install -g serve

WORKDIR /dist

#Copy builded storybook and start script
COPY --from=preprod /dist/public /dist/public
COPY --from=preprod /dist/start.sh /dist/start.sh

ENTRYPOINT [ "/dist/start.sh" ]  