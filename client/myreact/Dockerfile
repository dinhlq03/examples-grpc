FROM node:alpine
WORKDIR /app
COPY package.json ./
# COPY package-lock.json ./
COPY ./ ./
RUN npm i
# Service listens on port 8080.
EXPOSE 3000
CMD ["npm", "run", "start"]