#!/bin/sh

#### Color scape codes ####
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color
###########################

# Prepair git hooks for run prettier on pre-commit
rm -rf .git/hooks
ln -s ../git-hooks .git/hooks
echo "${GREEN}Setup completed!${NC}"