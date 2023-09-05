# Use the official Cypress base image
FROM cypress/included:9.2.0

# Set the working directory
WORKDIR /e2e

# Copy your tests, locators, and any other necessary files or directories
COPY . .

# Install any additional dependencies
RUN npm install

# Command to run your tests
CMD ["cypress", "run"]
