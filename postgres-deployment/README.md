## Requirements:
* docker
* docker-compose

## Quick Start
* Go inside of directory,  `cd postgres-deployment`
* Run this command `docker-compose up -d`


## Environments
This Compose file contains the following environment variables:

* `POSTGRES_USER` the default value is **user**
* `POSTGRES_PASSWORD` the default value is **password**
* `PGADMIN_PORT` the default value is **8080**
* `PGADMIN_DEFAULT_EMAIL` the default value is **admin@pgadmin.org**
* `PGADMIN_DEFAULT_PASSWORD` the default value is **admin**

## Access to postgres: 
* `http://localhost:35000`
* **Username:** user (as a default)
* **Password:** password (as a default)

## Access to PgAdmin: 
* **URL:** `http://localhost:8080`
* **Username:** admin@pgadmin.org (as a default)
* **Password:** admin (as a default)

## Add a new server in PgAdmin:
* **Host name/address** `localhost`
* **Port** `5432`
* **Username** as `POSTGRES_USER`, by default: `user`
* **Password** as `POSTGRES_PASSWORD`, by default `password`
