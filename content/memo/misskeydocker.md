---
title: "localでmisskeyを起動する方法(Docker)"
date: 2022-04-11T19:58:23+09:00
draft: false
---

## localでmisskeyを起動する方法(Docker)

1. `docker-compose.yml`  を下のに変更

```yaml
version: "3"

services:
  db:
    restart: always
    image: postgres:12.2-alpine
    ports:
      - "5432:5432"
    networks:
      - internal_network
      - external_network
    env_file:
      - .config/docker.env
    volumes:
      - ./db:/var/lib/postgresql/data

  redis:
    restart: always
    image: redis:4.0-alpine
    ports:
      - "6379:6379"
    networks:
      - internal_network
      - external_network
    volumes:
      - ./redis:/data

networks:
  internal_network:
    internal: true
  external_network:
```

2. `yarn run dev` で起動
3. [https://localhost:3000](https://localhost:3000) で確認
