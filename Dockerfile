# base image
FROM huanlv94/node-ico-base

RUN rm -rf /home/nauh-ico
RUN mkdir -p /home/nauh-ico
ADD . /home/nauh-ico
# set working directory
WORKDIR /home/nauh-ico

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /home/nauh-ico/node_modules/.bin:$PATH

COPY /home/node_modules /home/nauh-ico/
RUN cd /home/nauh-ico
# install and cache app dependencies
RUN yarn install

# start app
CMD ["yarn", "start"]