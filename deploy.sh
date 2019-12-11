#!/usr/bin/bash

docker build -t n-vote .
docker run -itd --name n-vote -p 6000:6000 n-vote
