#!/usr/bin/env bash
psql "postgres://admin:$admin@postgres/postgres?sslmode=disable" <<-EOSQL
CREATE USER postgres WITH ENCRYPTED PASSWORD 'postgres';
CREATE DATABASE "chimnie-db";
GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;
EOSQL