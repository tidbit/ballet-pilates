#!/bin/bash

if [ "$WORKERS_CI_BRANCH" == "staging" ]; then
        echo "Build for staging"
        bun run v:build --mode staging
else
        echo "Build for production"
        bun run v:build
fi
