################################
# REACT Build phase
#
FROM node:14.6-alpine AS builder

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build


################################
# NGinX Conf and serve
#
FROM nginx:1.17-alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /opt/web/build /usr/share/nginx/html
EXPOSE 80

ENV REACT_APP_API_URL_1=none

RUN apk --no-cache add curl bash
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY ./nginx.config /etc/nginx/nginx.template
COPY ./.env .
COPY ./env.sh .
RUN chmod +x env.sh
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && /bin/bash -c /usr/share/nginx/html/env.sh && nginx -g 'daemon off;'"]
