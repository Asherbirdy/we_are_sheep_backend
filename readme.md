
複製 .env.sample 為 .env.dev 和 .env.prod
```
cp .env.sample .env.dev && cp .env.sample .env.prod
```

Install MongoDB Community Edition
`https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-community-with-docker/```

本地安裝mongoDB:
`docker pull mongodb/mongodb-community-server:latest`
`docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest`
