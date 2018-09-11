# # base image
# FROM node:9.6.1

# RUN mkdir -p /home/nauh-ico
# ADD . /home/nauh-ico
# # set working directory
# WORKDIR /home/nauh-ico

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /home/nauh-ico/node_modules/.bin:$PATH

# RUN cd /home/nauh-ico
# # install and cache app dependencies
# RUN yarn install --silent

# # start app
# CMD ["yarn", "run:product"]

### STAGE 1: Build ###
FROM node:9.6.1 as build

RUN mkdir -p /home/nauh-ico
ADD . /home/nauh-ico
# set working directory
WORKDIR /home/nauh-ico

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /home/nauh-ico/node_modules/.bin:$PATH

RUN cd /home/nauh-ico
# install and cache app dependencies
RUN yarn install --silent

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /home/nauh-ico/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]