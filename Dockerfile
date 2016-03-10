FROM node:5.8

# Install global tools
RUN npm install -g grunt-cli
RUN npm install -g bower

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app
ONBUILD RUN bower install --allow-root

EXPOSE 9000

CMD [ "grunt", "serve:dist" ]
