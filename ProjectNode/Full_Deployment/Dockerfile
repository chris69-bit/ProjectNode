#Use official runtime as the base image
FROM node:14-alpine

#Create a working directory inside the container
WORKDIR /app

#Install SQLite dependencies
RUN apt-get update -qq && apt-get install -y sqlite3 libsqlite3-dev

#Copy and install dependencies inside the container
COPY package.json /app/
RUN npm install

#Copy the rest of the application
COPY . /app/

#Expose a port 3000
EXPOSE 3000

#RUN the application
CMD [ "npm", "start" ]