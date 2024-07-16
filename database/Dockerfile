FROM postgres:13

ENV POSTGRES_DB=auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password

COPY init.sql /docker-entrypoint-initdb.d/
