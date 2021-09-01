## Requirements:
* docker
* docker-compose

## Quick Start
* Go inside of directory,  `cd postgres-deployment`
* Run this command `docker-compose up -d`


## Environments
This Compose file contains the following environment variables:

* `POSTGRES_USER` the default value is **admin**
* `POSTGRES_PASSWORD` the default value is **admin**
* `PGADMIN_PORT` the default value is **8080**
* `PGADMIN_DEFAULT_EMAIL` the default value is **admin@pgadmin.org**
* `PGADMIN_DEFAULT_PASSWORD` the default value is **admin**

## Access to postgres: 
* `http://localhost:5432`
* **Username:** admin (as a default)
* **Password:** admin (as a default)

## Access to PgAdmin: 
* **URL:** `http://localhost:8080`
* **Username:** admin@pgadmin.org (as a default)
* **Password:** admin (as a default)

## Add a new server in PgAdmin:
* **Host name/address** `postgres`
* **Port** `5432`
* **Username** as `POSTGRES_USER`, by default: `admin`
* **Password** as `POSTGRES_PASSWORD`, by default `admin`
