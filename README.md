# ABinBev-Book-Api

install all dependencies

You can add your env folder and file by creating a .env folder and a .env file in it. i already added some test configs in the config file so its not necessary
To run the app yarn start:dev:service

the router explorer (on the terminal) shows all the available endpoints.

To create a book  send a POST request to ```markdown
{{BASE_URL}}/books

```

sample request will look like 

`{
    "title": "AB Interview handbook",
    "author": "Ibukunoluwa",
    "pageCount": 500,
    "genre": "education",
    "price" :15000,
    "publishedAt": "2023-11-01",
    "description": "A book to help understand our interview process",
    "isAvailable": true,
    "isbn": "46e646-962446-9654"
}`

and sample success response is 

```json
{
    "meta": {
        "statusCode": 201,
        "success": true,
        "message": "Book successfully created"
    },
    "data": {
        "title": "AB INTERVIEW HANDBOOK",
        "author": "IBUKUNOLUWA",
        "pageCount": 500,
        "genre": "education",
        "price": 15000,
        "publishedAt": "2023-11-01T00:00:00.000Z",
        "description": "A book to help understand our interview process",
        "isbn": "46e646-962446-9654",
        "isAvailable": true,
        "id": 2,
        "publicId": "cdbcd474-01ec-4d23-9601-55efd3c39b52",
        "createdAt": "2023-08-07T17:05:36.317Z",
        "updatedAt": "2023-08-07T17:05:36.317Z"
    }
}
```

for an attempt to duplicate a book record  with same isbn

```json
{
    "meta": {
        "statusCode": 409,
        "error": {
            "statusCode": 409,
            "message": "Duplicate record is not allowed"
        }
    }
}
```

To fetch all bookk records

send a GET request to ```markdown
{{BASE_URL}}/books

```

and a suucess response looks as follows

```json
{
    "meta": {
        "statusCode": 200,
        "success": true,
        "pagination": {
            "totalCount": 2,
            "perPage": 10,
            "current": 1,
            "currentPage": "localhost:3000/v1/books?perPage=10&page=1"
        }
    },
    "data": [
        {
            "id": 1,
            "publicId": "fa7cdf1d-f287-481e-8843-b42171c8e4f7",
            "createdAt": "2023-08-07T17:03:50.639Z",
            "updatedAt": "2023-08-07T17:03:50.639Z",
            "title": "AB INTERVIEW HANDBOOK",
            "author": "IBUKUNOLUWA",
            "pageCount": 500,
            "genre": "education",
            "price": 15000,
            "publishedAt": "2023-11-01T00:00:00.000Z",
            "description": "A book to help understand our interview process",
            "isbn": "46e646-962446-9654",
            "isAvailable": true
        },
        {
            "id": 2,
            "publicId": "cdbcd474-01ec-4d23-9601-55efd3c39b52",
            "createdAt": "2023-08-07T17:05:36.317Z",
            "updatedAt": "2023-08-07T17:05:36.317Z",
            "title": "AB INTERVIEW HANDBOOK",
            "author": "IBUKUNOLUWA",
            "pageCount": 500,
            "genre": "education",
            "price": 15000,
            "publishedAt": "2023-11-01T00:00:00.000Z",
            "description": "A book to help understand our interview process",
            "isbn": "46e646-962446-9654",
            "isAvailable": true
        }
    ]
}
```

To fetch a single book send a GET request to ```markdown
{{BASE_URL}}/books/:bookId

```

```json
{
    "meta": {
        "statusCode": 200,
        "success": true
    },
    "data": {
        "id": 1,
        "publicId": "fa7cdf1d-f287-481e-8843-b42171c8e4f7",
        "createdAt": "2023-08-07T17:03:50.639Z",
        "updatedAt": "2023-08-07T17:03:50.639Z",
        "title": "AB INTERVIEW HANDBOOK",
        "author": "IBUKUNOLUWA",
        "pageCount": 500,
        "genre": "education",
        "price": 15000,
        "publishedAt": "2023-11-01T00:00:00.000Z",
        "description": "A book to help understand our interview process",
        "isbn": "46e646-962446-9654",
        "isAvailable": true
    }
}
```

To update any field in a book send a PATCH request to ```markdown
{{BASE_URL}}/books/:bookId

```

sample request ```python
{
  
    "pageCount": 800,
    "price" :25000

}
```

sample response if successful

```json
{
    "meta": {
        "statusCode": 200,
        "success": true,
        "message": "Book successfully updated"
    },
    "data": {
        "id": 1,
        "publicId": "fa7cdf1d-f287-481e-8843-b42171c8e4f7",
        "createdAt": "2023-08-07T17:03:50.639Z",
        "updatedAt": "2023-08-07T17:25:21.418Z",
        "title": "AB Interview handbook",
        "author": "Ibukunoluwa",
        "pageCount": 800,
        "genre": "education",
        "price": 25000,
        "publishedAt": "2023-11-01T00:00:00.000Z",
        "description": "A book to help understand our interview process",
        "isbn": "46e646-962446-9654",
        "isAvailable": true
    }
}
```

sample response if not exist a book with such id

```json
{
    "meta": {
        "statusCode": 404,
        "error": {
            "statusCode": 404,
            "message": "Resource doesnt exist"
        }
    }
}
```

 same for delete a book
  send a DELETE to ```markdown
{{BASE_URL}}/books/:bookId

```

with a successful response sample 

```json
{
    "meta": {
        "statusCode": 200,
        "success": true,
        "message": "Book successfully deleted"
    },
    "data": {
        "_id": "fa7cdf1d-f287-481e-8843-b42171c8e4f7"
    }
}
```
