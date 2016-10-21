## Otso code camp client examples for Backand API (https://www.backand.com/)
Backand is a powerful backend-as-a-service for AngularJS and ReactJS that provides out-of-the-box social login, real-time communication, Ionic integration and much more.

## How to use Backand to create a simple API
* Register account or use your GitHub account.
* Add a new app
* See the default database model in Objects -> Model
* When you make changes to the model, do not forget to "Validate & Update" on the right up corner everynow and then to save the changes.
* Data (for example 'items' in the Default Data Model) can be entered from Objects -> items -> + Add Row
* For examples on how to use the API see Objects -> items -> REST API tab where you can edit the parameters that you need in a request to the backend.


## How to use ready examples to connect to the Backand API
* There are couple examples in this git repository or you can use Backand's examples: https://www.backand.com/app-examples/
* Backand requires a Anonymous Token in order to use the API from a client application without registering any account
* Anymous Token can be found from Security & Auth -> Configuration -> AnonymousToken 
* This token must be sent with the requests to the API in the request Headers as "anonymousToken" (more instructions in the README file of the example directory).

## Setting up development in C9 
* Create account at https://c9.io/ or use your GitHub account.
* Create a new nodejs workspace using this git address https://github.com/otso-cc/code-camp-health.git

## Clone this examples repository using the console if you did not use the address in the previous step
```
git clone https://github.com/otso-cc/code-camp-health.git
```

## Already familiar with REST APIs and HTTP verbs?
* Start a project with any technology and start hacking away with the API usage examples in Objects -> [data model] -> REST API :)

