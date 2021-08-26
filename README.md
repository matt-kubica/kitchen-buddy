## Overview
Very simple mobile application that helps managing resources in a kitchen.

## Structure
Project repository consist of two parts:
- `backend` - very simple REST API, that can be launched easily along with database thanks to `docker compose` . To launch backend, docker runtime needs to be installed, then just type `docker compose up` inside `backend` directory. In order to run backend in development mode, type `docker compose -f docker-comose-dev.yml up` instead. 
- `mobile-app` - application itself, built with expo, tested with expo on iOS system only. Failure-free execution and good user experience canot be guaranteed on other platforms. Instructions how to launch an app is stored inside directory's README.

## Peristence
Application uses remote database to store state between executions, in order to work properly application needs to connect to its backend. Launching whole application's stack:
- Type `docker compose up` inside `backend` directory.
- Make sure that your machine is in the same LAN as mobile device
- Type `ipconfig getifaddr en0 | pbcopy` in order to obtain machine's local address
- Paste copied value to `mobile-app/src/http-common.ts`, to `BACKEND_HOST` constant
- Go to `mobile-app` directory and type `yarn run expo start`
- Scan code with phone or run using iOS emulator (app is optimized for iOS devices)
