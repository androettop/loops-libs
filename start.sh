#!/bin/sh

if [ "${APP_ENV}" = "devel" ]
then
    echo "Running in devel"
    if [ -d "/dist/packages" ]; then
        cd /devel || exit
        rm -rf /devel/node_modules
        ln -s /dist/node_modules /devel

        # iterate every directory in /dist/packages
        for dir in /dist/packages/*; do
            # if $dir is a directory
            if [ -d "$dir" ]; then
                package=$(basename "$dir")
                # Fix node modules links for devel mode
                rm "/dist/node_modules/@loops-ar/$package"
                ln -s "/devel/packages/$package" "/dist/node_modules/@loops-ar"

                # Set node_modules for each loops-ar package 
                rm -rf "/devel/packages/$package/node_modules"
                ln -s "/dist/packages/$package/node_modules" "/devel/packages/$package"

            fi
        done
        yarn start
    else
        echo "Are you running a production image in devel mode? 🤔"
        echo "Build the image in developer mode with \"$ ./build --target dev\""
    fi    
else
    echo "Running in production"
    serve public -p 3000
fi

