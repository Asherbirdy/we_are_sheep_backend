FROM node:18-alpine

ENV NODE_ENV=development

WORKDIR /app

# Install TypeScript and ts-node globally
RUN npm install -g typescript ts-node

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

# Compile TypeScript to JavaScript
RUN tsc

# Expose the port defined in .env.dev
EXPOSE 2500

# Use ts-node to run the TypeScript file directly
CMD ["sh", "-c", "source .env.dev && ts-node ./app.ts"]