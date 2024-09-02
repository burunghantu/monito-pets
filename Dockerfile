FROM node:18.16.1-alpine

RUN apk add --no-cache vim


ARG NUXT_PUBLIC_SITE_URL
ARG API_TOKEN
ARG IS_STAGING
ARG NUXT_SECRET

ENV NUXT_PUBLIC_SITE_URL=${NUXT_PUBLIC_SITE_URL}
ENV API_TOKEN=${API_TOKEN}
ENV IS_STAGING=${IS_STAGING}
ENV NUXT_SECRET=${NUXT_SECRET}

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080
ENV NODE_ENV=${ENV}

RUN mkdir -p /var/www/html
COPY . /var/www/html/
RUN rm /var/www/html/Dockerfile

WORKDIR /var/www/html

RUN npm --version
RUN npm install --production=false
RUN npm run build
RUN npm prune 
# RUN npm run generate

EXPOSE 8080

CMD [ "npm", "run", "start" ]
