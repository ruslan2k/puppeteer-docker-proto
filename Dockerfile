FROM node:18.12.1-bullseye

RUN apt-get -qq update
RUN apt-get -qq -y install chromium

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .


CMD [ "npm", "start" ]



