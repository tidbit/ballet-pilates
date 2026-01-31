#!/bin/bash

if [ "$WORKERS_CI_BRANCH" == "main" ]; then
        echo "Build for production"
        bun run v:build
else
        echo "Build for staging"
        bun run v:build --mode staging
fi
