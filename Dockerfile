FROM node:alpine
MAINTAINER Vamsi Ramakrishnan "vamsi.ramakrishnan@oracle.com"

# Install the application
ADD package.json /app/package.json
RUN cd /app && npm install
ADD app.js /app/app.js
ENV WEB_PORT 80
EXPOSE  80

# Define command to run the application when the container starts
CMD ["node", "/app/app.js"]
