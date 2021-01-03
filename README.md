# serverless-api

Root URL: POSTMAN
```
POST route:
https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings-POST

raw: JSON Body:

{"item": "baby duck",
"shade": ["light yellow"],
"description": "cute and quacks"
}

{"item": "canary",
"shade": ["greenish yellow"],
"description": "small songbird in the finch family"
}

Response:

{"id":"a7f0c9ca-59e3-409f-8171-7bbd319fddd3","item":"baby duck","shade":["light yellow"],"description":"cute and quacks"}

{"id":"1ad8ee13-822d-4323-a510-05752b6ab5e5","item":"canary","shade":["greenish yellow"],"description":"small songbird in the finch family"}

```
```
GET route:

https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/

Response: 

"id":"1ad8ee13-822d-4323-a510-05752b6ab5e5","shade":["greenish yellow"]},{"item":"baby duck","description":"cute and quacks","id":"a7f0c9ca-59e3-409f-8171-7bbd319fddd3","shade":["light yellow"]},{"item":"baby duck","description":"cute and quacks","id":"0bf1b330-643a-4f6a-9691-9fcd91426800","shade":["light yellow"]},{"id":"27a999d7-57e8-48a4-bd92-9206460ee8fe"}]
```
```
PUT route:

https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/0bf1b330-643a-4f6a-9691-9fcd91426800

{"item": "banana",
"shade": ["yellow"],
"description": "delicious with peanut butter"
}

Response:

{"item":"banana","description":"delicious with peanut butter","id":"168a3c66-3124-413f-a0db-8942768e28a8","shade":["yellow"]}

```
```
Get route:

https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/

Response: 

[{"item":"canary","description":"small songbird in the finch family","id":"1ad8ee13-822d-4323-a510-05752b6ab5e5","shade":["greenish yellow"]},{"item":"banana","description":"delicious with peanut butter","id":"168a3c66-3124-413f-a0db-8942768e28a8","shade":["yellow"]},{"item":"baby duck","description":"cute and quacks","id":"a7f0c9ca-59e3-409f-8171-7bbd319fddd3","shade":["light yellow"]},{"item":"baby duck","description":"cute and quacks","id":"0bf1b330-643a-4f6a-9691-9fcd91426800","shade":["light yellow"]},{"id":"27a999d7-57e8-48a4-bd92-9206460ee8fe"}]
```
```
DELETE route

https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/0bf1b330-643a-4f6a-9691-9fcd91426800

```
```
GET route:

https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/

Response: (Deleted the double baby duck item)

[{"item":"canary","description":"small songbird in the finch family","id":"1ad8ee13-822d-4323-a510-05752b6ab5e5","shade":["greenish yellow"]},{"item":"banana","description":"delicious with peanut butter","id":"168a3c66-3124-413f-a0db-8942768e28a8","shade":["yellow"]},{"item":"baby duck","description":"cute and quacks","id":"a7f0c9ca-59e3-409f-8171-7bbd319fddd3","shade":["light yellow"]},{"id":"27a999d7-57e8-48a4-bd92-9206460ee8fe"}]
```

+ ![lab-18-uml](assets/lab-18-uml.png)

+ What this lab is doing:
  + (API Gateway) Create Routes -> connects callback functions to Lambda -> dynamoDB to connect
  + Create Lambda function for each route
+ Steps/buttons to remember:

+ Create Lambda function
  + Lambda -> create function -> `<name of api>` - POST/GET/PUT/DELETE
  + Add trigger -> API Gateway -> HTTP API -> Create API -> Integrations
  + Security -> Open -> add -> details -> URL Copy -> Postman

  (ex. POST -> create attach -> lambda function name - POST)

+ Services -> API Gateway -> HTTP API -> name of API -> Stage name = default -> create -> make routes

+ GET / `<name>` / {id} - Read
+ POST / `<name>` - Create
+ PUT / `<name>` / {id} - Update
+ DELETE / `<name>` / {id} - Delete
