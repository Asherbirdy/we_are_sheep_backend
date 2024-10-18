cp .env.sample .env.dev && cp .env.sample .env.prod# church_saas
# church_saas


docker compose --env-file .env.dev build
docker compose --env-file .env.dev up

https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-community-with-docker/