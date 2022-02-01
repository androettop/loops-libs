#!/bin/sh

#### Color scape codes ####
GREEN='\033[0;32m'
NC='\033[0m' # No Color
###########################

# Prepair git hooks for run prettier on pre-commit
rm -rf .git/hooks
ln -s ../git-hooks .git/hooks
echo -e "${GREEN}Setup completed!${NC}"