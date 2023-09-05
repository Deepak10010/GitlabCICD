# Use the official Cypress Docker image
FROM cypress/included:8.1.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Run Cypress tests
CMD ["npm", "test"]
