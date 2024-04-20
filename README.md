# Personal Health Record (PHR) App

## Introduction
The Personal Health Record (PHR) App is a web-based application designed to help individuals keep track of their medical records, medications, lab results, and doctor visits in one convenient location. Built with React, Node.js, and MongoDB, this project aims to simplify the management of health information for users.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm

### Installation
1. Clone the repository:
git clone https://github.com/periGH/phr-app.git

2. Navigate to the project directory:
cd phr-app

3. Install dependencies:
npm install 

### Running the Application
1. Start the backend server:
npm run server

The server runs on `http://localhost:3001` and connects to MongoDB for data storage.

2. In a separate terminal, start the React development server:
npm start

The application will be available at `http://localhost:3000`.

## Features
- **User Authentication**: Secure login and registration system.
- **Health Records Management**: Users can add, view, and manage their medical records.
- **Medication Tracking**: Keep track of medications, dosages, and schedules.
- **Lab Results**: Upload and access lab results.
- **Doctor Visits**: Record details of past and upcoming doctor appointments.

## MongoDB Connection Setup
Follow these steps to connect the application backend to MongoDB:

- **Create a MongoDB Atlas Account**: Sign up and create a free tier cluster.
- **Configure Database Access**: Add a new database user with read and write privileges.
- **Whitelist Your IP Address**: Allow access from your IP or anywhere for development.
- **Connect Your Application**: Use the connection string provided by Atlas in your `.env` file:

MONGO_URI=mongodb+srv://yourUser:yourPassword@yourClusterURL/yourDBname

### MongoDB Connection Setup ### 
- This application uses MongoDB for data storage, leveraging MongoDB Atlas for a cloud-based solution. To connect the application backend to MongoDB, follow these steps:

- Create a MongoDB Atlas Account: Sign up for MongoDB Atlas at https://www.mongodb.com/cloud/atlas and create a cluster. For development purposes, the free tier (M0) cluster is sufficient.

- Configure Database Access: In the MongoDB Atlas dashboard, navigate to the "Database Access" section to add a new database user with read and write privileges.

- Whitelist Your IP Address: For security, MongoDB Atlas requires you to whitelist IP addresses that can access your database. You can add your current IP address or allow access from anywhere for development purposes in the "Network Access" section.

- Connect Your Application: Go to your cluster's "Connect" section, select "Connect your application," and copy the provided connection string.

- Environment Variable: Store the connection string in an environment variable named MONGO_URI in a .env file at the root of your project. Replace <password> with the password of the database user you created, and <dbname> with the name of your database. It should look something like this:

MONGO_URI=mongodb+srv://yourUser:yourPassword@yourClusterURL/yourDBname

- Server Configuration: Ensure your backend server uses mongoose or a similar MongoDB driver to connect to the database using the MONGO_URI environment variable. You may need to install necessary packages (e.g., npm install mongoose dotenv).

- Start Your Server: Run your server (e.g., with npm run server). If everything is configured correctly, you should see a "Connected to MongoDB" message in your server logs, indicating a successful connection.

#### Generating a Secure JWT Secret: ####
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

## Deployment

### Deploying on Heroku

This section guides you through deploying the PHR App on Heroku.

#### Prerequisites
- A Heroku account. Sign up for free at [Heroku](https://signup.heroku.com/).
- Heroku CLI. Download and install from [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

#### Steps to Deploy
1. **Log in to Heroku CLI**: Open your terminal and log in to your Heroku account using the command:

2. **Create a Heroku App**: Create a new app on Heroku:

3. **Set Environment Variables**: Set up the necessary environment variables on Heroku:


4. **Deploy PHR Application**:
- Initialize a git repository in your project directory if you haven’t done so:
  ```
  git init
  git add .
  git commit -m "Initial commit"
  ```
- Push your code to Heroku:
  ```
  git push heroku master
  ```

5. **Open Your Application**: Once deployed, you can open the application. 

### Author
- **Perihan Hill**: Main Developer and Designer
