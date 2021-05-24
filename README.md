# Overview
Very simple mobile application that helps managing resources in a kitchen.
# Structure
Project repository consist of two parts:
- `backend` - very simple REST API, that can be launched easily along with database thanks to `docker compose` . Currently app is not using REST API in any way, however, API is going to be utilized in the future. Backend logic itself is not fully implemented as well (yet).
- `mobile-app` - application itself, built with expo, tested with expo on iOS system only. Failure-free execution and good user experience canot be guaranteed on other platforms.
