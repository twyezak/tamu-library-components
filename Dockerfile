FROM node:12.14-slim as npm

COPY package.json ./

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

RUN ls -la

FROM httpd:2.4-alpine

COPY --from=npm /app/dist/bundle/ /usr/local/apache2/htdocs/tl-components/

COPY src/config-template.json tmp/config-template.json
COPY docker-entrypoint /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint

ENTRYPOINT ["docker-entrypoint"]

RUN apk update; 
RUN apk upgrade;

RUN echo "" >> /usr/local/apache2/conf/httpd.conf
RUN echo "###SPECIFIC CUSTOMIZATIONS###" >> /usr/local/apache2/conf/httpd.conf
RUN echo "" >> /usr/local/apache2/conf/httpd.conf

RUN printf '<Directory /usr/local/apache2/htdocs> \nOrder Allow,Deny \nAllow from all \nAllowOverride all \nHeader set Access-Control-Allow-Origin "*" \n</Directory>' >> /usr/local/apache2/conf/httpd.conf

CMD ["httpd", "-D", "FOREGROUND"]
