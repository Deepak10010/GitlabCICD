# Use the official Cypress base image
FROM cypress/included:8.7.0

# Set the working directory in the container
WORKDIR /e2e

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the test files
COPY . .

# Define the command to run your tests
CMD ["npm", "test"]
