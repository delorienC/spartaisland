FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose port for React development server
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]