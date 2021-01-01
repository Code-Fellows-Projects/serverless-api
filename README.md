# serverless-api

Root URL: POSTMAN
```
POST route :
https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings-POST

raw: JSON Body:
{"item": "banana",
"shade": ["bright yellow"],
"description": "moldy quickly"
}

{"item": "yield sign",
"shade": ["electric yellow"],
"description": "get dirty and serves no purpose"
}

Response:

{"id":"bca03a13-15e8-4f8b-aa5e-e78a61357a0c","item":"banana","shade":["bright yellow"],"description":"moldy quickly"}

{"id":"63b6edb5-dbd5-4972-9573-87c97ea08fe5","item":"yield sign","shade":["electric yellow"],"description":"get dirty and serves no purpose"}
```
```
GET route:
https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/{id}

[{"item":"banana","description":"moldy quickly","id":"253b6673-35db-46b2-9849-bc3330b02f6e","shade":["bright yellow"]}]
```
```
GET route:

[{"id":"34db5155-d8e9-4c66-ba8d-28a2799c5b27"},{"item":"banana","description":"moldy quickly","id":"253b6673-35db-46b2-9849-bc3330b02f6e","shade":["bright yellow"]},{"id":"2f92a195-e982-4f4c-a950-0ef65b9f13e8"},{"item":"yield sign","description":"get dirty and serve no purpose","id":"63b6edb5-dbd5-4972-9573-87c97ea08fe5","shade":["electric yellow"]},{"id":"27a999d7-57e8-48a4-bd92-9206460ee8fe"}]
```
```
PUT route:

{"item":"lemon","description":"best served sour not sweet","id":"bca65b55-e573-43c7-8b6b-93019bda9b96","shade":["highlighter yellow"]}

```
```
Get route:

[{"id":"34db5155-d8e9-4c66-ba8d-28a2799c5b27"},{"item":"banana","description":"moldy quickly","id":"253b6673-35db-46b2-9849-bc3330b02f6e","shade":["bright yellow"]},{"item":"lemon","description":"best served sour not sweet","id":"bca65b55-e573-43c7-8b6b-93019bda9b96","shade":["highlighter yellow"]},{"id":"2f92a195-e982-4f4c-a950-0ef65b9f13e8"},{"item":"yield sign","description":"get dirty and serve no purpose","id":"63b6edb5-dbd5-4972-9573-87c97ea08fe5","shade":["electric yellow"]},{"id":"27a999d7-57e8-48a4-bd92-9206460ee8fe"}]
```
```
DELETE route

https://anay0prhv3.execute-api.us-west-2.amazonaws.com/yellowThings/{id}
```
```
GET route:

[{"item":"lemon","description":"best served sour not sweet","id":"bca65b55-e573-43c7-8b6b-93019bda9b96","shade":["highlighter yellow"]},{"id":"2f92a195-e982-4f4c-a950-0ef65b9f13e8"},{"item":"yield sign","description":"get dirty and serve no purpose","id":"63b6edb5-dbd5-4972-9573-87c97ea08fe5","shade":["electric yellow"]},{"id":"27a999d7-57e8-48a4-bd92-9206460ee8fe"}]
```

+ ![lab-18-uml](assets/lab-18-uml.png)