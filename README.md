## Project overview

This project creates Restful API with node.js, express.js and MongoDB

|Description|Verb|URL|
|----|----|----|
|Get all customer|GET|GET http://localhost:3000/customers/|
|Get specific customer|GET|GET http://localhost:3000/customers/{id}|
|Delete specific customer|DELETE|DELETE http://localhost:3000/customers/{id}|
|Update customer|PATCH|PATCH http://localhost:3000/customers/|

Example body for create customer:

```json
{
	"name" : "John doe",
	"email" : "johndoe@email.com"
}
```


## Setup project

Here are quick steps to setup the project.

1. Clone source code to a local directory.
2. Update connection string in appsettings.json
3. Use **Terminal** run command *"npm-start"*.
4. Testing get data by calling API http://localhost:3000/customers/