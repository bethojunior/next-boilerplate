.PHONY: build up

build:
	docker-compose -f infra/docker-compose.yaml build

up:
	docker-compose -f infra/docker-compose.yaml up -d
