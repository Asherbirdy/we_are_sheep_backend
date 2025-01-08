本機開發：
複製環境變數
```
cp .env.sample .env
```
Docker(抓.env)
```
docker compose build
docker compose up
```
pnpm(抓.env.dev 和 .env.prod)
```
pnpm i
pnpm dev
```

Docker部署：
git clone 拉下來
```
正式：
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up

測試：
docker compose -f docker-compose.test.yml build
docker compose -f docker-compose.test.yml up
```
pnpm 部署：
```
pnpm build
```
###### 將dist檔案副上，並在平台上設定.env
------------

Install MongoDB Community Edition
`https://www.mongodb.com/zh-cn/docs/manual/tutorial/install-mongodb-community-with-docker/```

本地安裝mongoDB:
`docker pull mongodb/mongodb-community-server:latest`
`docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest`

JWT加密金鑰網址：
可以參考這網站的 Encryption key 256:https://acte.ltd/utils/randomkeygen

------------

### 商業邏輯：
**權限**：
分為 dev(開發者)、admin(管理員)、districtLeader(區負責)、user(區成員)

**開頭**：
1. 先註冊第一個帳號 也是 dev 帳號 綁定email 和 區域

**District(區)**：
1. 只有 dev 和 admin 帳號 可以CRUD 區

**User Serial Number(註冊序號)**：
1. dev、admin 可以創建 districtLeader 和 user 帳號
2. districtLeader 只能創建 user 帳號

**Friend(好友)**：
1. 之後寫

**Shepherd(牧養名單)**：
1. 之後寫