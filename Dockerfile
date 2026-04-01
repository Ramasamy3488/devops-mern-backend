# -------- Base Image --------
FROM node:18-alpine

# -------- App Directory --------
WORKDIR /app

# -------- Install Dependencies --------
COPY package*.json ./
RUN npm install --only=production

# -------- Copy App Code --------
COPY . .

# -------- Environment --------
ENV NODE_ENV=production

# -------- Security (non-root user) --------
USER node

# -------- Port --------
EXPOSE 5000

# -------- Start App --------
CMD ["node", "index.js"]
