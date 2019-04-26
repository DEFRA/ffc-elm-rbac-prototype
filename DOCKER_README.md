# Docker notes

The project has been containerised

The container can be built and run locally using the `./start` command

`.start` does not play nicely with the command line. The container can be stopped by launching another shell, running `docker ps` then `docker stop container-id`, where container ID is the ID from the `docker ps` output

Alternatively use the Kitematic GUI

A docker compose file is also provided, which can be run via the `./start-compose` script

A kubernetes orchestartion file will also be provided

