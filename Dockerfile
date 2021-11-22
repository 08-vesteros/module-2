FROM node:15
WORKDIR /app 
COPY . .
RUN npm install -f && npm run build
EXPOSE 80
CMD node dist/server.js