# Use the Node.js v22.13.0 base image
FROM node:22.13.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]
