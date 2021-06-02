# To demo and see how this works:
Make sure you bring in the following environment variables in an .ENV file: 
MONGODB_URL
ACTIVE_TOKEN_SECRET 
ACCESS_TOKEN_SECRET 
REFRESH_TOKEN_SECRET 

BASE_URL

MAIL_CLIENT_ID
MAIL_CLIENT_SECRET
MAIL_REFRESH_TOKEN 
SENDER_EMAIL_ADDRESS 

TWILIO_ACCOUNT_SID 
TWILIO_AUTH_TOKEN 
TWILIO_PHONE_NUMBER 

```bash
yarn tsc 

yarn devServer
```


# What This Is
This is my personal blog that includes user account creation and authentication using TS and MongoDB.  This starting point includes authentication via JWT w/refresh and access tokens, validation of email and/or phone number (through Twilio's API), and more.


# If you want to build this project out yourself, here are some helpful points: 


# Starting scripts used:

```bash
yarn init 

yarn add express mongoose dotenv cors morgan cookie-parser bcrypt jsonwebtoken nodemailer google-auth-library twilio
yarn create react-app client --template typescript
```

# dev dependencies
```bash
yarn add @types/express @types/mongoose @types/dotenv @types/cors @types/morgan @types/cookie-parser @types/nodemailer @types/bcrypt @types/jsonwebtoken --dev
```
# create tsconfig
```bash
yarn tsc --init
```
# create dist
```bash
yarn tsc
```
# run dist
```bash
node dist/index.js
```
# start dev server
```bash
yarn devServer
```
# Scripts are in package.json file for ease of build/run/dev

# MongoDB Atlas instructions:
Create new project
Create cluster with whatever name
Go to Database Access tab and add as database user
Go to network tab to add IP 0.0.0.0/0


# Configure auth at console.google.cloud



## Client Instructions

cd into client directory and `yarn install`
`yarn start` to start up client




