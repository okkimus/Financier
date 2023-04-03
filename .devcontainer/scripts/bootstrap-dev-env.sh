#!/bin/bash

cd /workspace/src/frontend
npm install

cd /workspace/src/backend
npm install
cp -n .env-sample .env

