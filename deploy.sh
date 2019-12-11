#!/usr/bin/bash

docker build -t n-vote .
docker run -itd --name n-vote -p 5000:5000 n-vote
