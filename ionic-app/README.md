## Ionic framework (version 1.x) example
Ionic: http://ionicframework.com/
Example based on: https://market.ionic.io/starters/backand-simple

## Setup
* With the console, move to the ionic-app directory and paste these two commands. The first one will install all the necessary dependencies for the application. The second installs cordova and ionic libraries, and the third runs the server itself.
```
npm install 
npm install -g cordova ionic
ionic serve -p $PORT --nolivereload
```

Multiple addresses available.
Please select which address to use by entering its number from the list below:
 1) 172.17.0.67 (eth0) <---- select this
 2) localhost
 
 
## How to switch to own backand API
Modify the following values in file: ionic-app/www/js/app.js

BackandProvider.setAppName('cc1'); // change here to your app name
BackandProvider.setAnonymousToken('eb9ff8d6-eac9-4d99-8d0d-4b9ffe745d2a'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access
 
 
 
 
 
 
 
 
