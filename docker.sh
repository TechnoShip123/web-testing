#!/bin/bash

# Remove the previous image
docker rmi nextjs-docker --force

# Create a new image
docker build -t nextjs-docker .

# Run the container
docker run -d -p 3000:3000 nextjs-docker

echo -e "\u001b[32m✓\u001b[0m All done!"
