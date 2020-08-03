FROM node

ENV NPM_CONFIG_LOGLEVEL=warn

COPY . /app

RUN npm install --global nodemon

WORKDIR /app

# and/or set it with a command-line option
RUN npm install --loglevel=warn

CMD ["npm", "start"]

# FROM node

# RUN mkdir -p /usr/src/app
# RUN mkdir -p /usr/src/app/node_module
# RUN mkdir -p /usr/src/app/public

# # Create app directory
# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

# # Bundle app source
# COPY . .

# EXPOSE 3000
# CMD ["npm", "start"]