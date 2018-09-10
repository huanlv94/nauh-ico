# base image
FROM node:9.6.1

RUN mkdir -p /home/nauh-ico
ADD . /home/nauh-ico
# set working directory
WORKDIR /home/nauh-ico

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /home/nauh-ico/node_modules/.bin:$PATH

RUN cd /home/luna
# install and cache app dependencies
RUN npm install --silent

# start app
CMD ["npm", "start"]