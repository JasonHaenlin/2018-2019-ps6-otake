define({ "api": [
  {
    "type": "post",
    "url": "/form/testimonial",
    "title": "Request to create a new token for each mail and to send a mail for each",
    "name": "PostMailForToken",
    "group": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>Access-Control-Allow-Headers: x-requested-with, Content-Type, origin, authorization, accept, client-security-token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>Access-Control-Allow-Origin: https://ps.otakedev.com</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Credentials",
            "description": "<p>Access-Control-Allow-Credentials: true</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>Cookie: connect.sid=***</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '[\"jh.notif@gmail.com\"]'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/account/form/testimonial",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "send",
            "description": "<p>back a confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"token\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "json",
            "optional": false,
            "field": "UnauthenticatedUserError",
            "description": "<p>No privilege to access this resource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  \"code\": 401,\n  \"message\": \"something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/account/index.js",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Request a login for a user",
    "name": "gGtCheck",
    "group": "Account",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>Access-Control-Allow-Headers: x-requested-with, Content-Type, origin, authorization, accept, client-security-token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>Access-Control-Allow-Origin: https://ps.otakedev.com</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Credentials",
            "description": "<p>Access-Control-Allow-Credentials: true</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>Cookie: connect.sid=***</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '{\n           \"username\": \"user\",\n           \"password\": \"pswd\"\n         }'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/auth/login/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "send",
            "description": "<p>back a confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"auth\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "type": "json",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>Fail to login</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 400 Not Found\n{\n  \"code\": 400,\n  \"message\": \"something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/auth/logout/",
    "title": "Request a check to see if a user is login",
    "name": "GetCheck",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>Access-Control-Allow-Headers: x-requested-with, Content-Type, origin, authorization, accept, client-security-token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>Access-Control-Allow-Origin: https://ps.otakedev.com</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Credentials",
            "description": "<p>Access-Control-Allow-Credentials: true</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>Cookie: connect.sid=***</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/auth/logout/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "send",
            "description": "<p>back a confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"auth\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "type": "json",
            "optional": false,
            "field": "UnauthenticatedUserError",
            "description": "<p>No privilege to access this resource</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  \"code\": 401,\n  \"message\": \"something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/logout/",
    "title": "Request a logout",
    "name": "GetLogout",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>Access-Control-Allow-Headers: x-requested-with, Content-Type, origin, authorization, accept, client-security-token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>Access-Control-Allow-Origin: https://ps.otakedev.com</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Credentials",
            "description": "<p>Access-Control-Allow-Credentials: true</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>Cookie: connect.sid=***</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/auth/logout",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "send",
            "description": "<p>back a confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"auth\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/logout/",
    "title": "Request a check for a token",
    "name": "PostToken",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>Access-Control-Allow-Headers: x-requested-with, Content-Type, origin, authorization, accept, client-security-token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>Access-Control-Allow-Origin: https://ps.otakedev.com</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Credentials",
            "description": "<p>Access-Control-Allow-Credentials: true</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Cookie",
            "description": "<p>Cookie: connect.sid=***</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '{\"token\":\"677868b5227e29ee2e701e00c4db160f\"}'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/account/form/testimonial",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "send",
            "description": "<p>back a confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"token\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/queue/tickets",
    "title": "Request ticket to delete",
    "name": "DeleteTickets",
    "group": "Queue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "studentId",
            "description": "<p>req params user id to identify who</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ticketId",
            "description": "<p>req params to define the ticket to delete</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/queue/tickets/bc06b188-5f63-4bdb-bd1e-481ef8e91a3/0",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"status\": \"ok\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "AccessDeniedError",
            "description": "<p>Student id not valid</p>"
          },
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 403 Access Denied Error\n{\n    \"code\": 403,\n    \"message\": \"AccessDeniedError: student id not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "delete",
    "url": "/queue/tickets",
    "title": "Request first ticket to be deleted",
    "name": "DeleteTicketsFirst",
    "group": "Queue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "room",
            "description": "<p>req params room id to identify which queue</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/queue/tickets/0/first",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"status\": \"ok\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "get",
    "url": "/queue/student/:uuid",
    "title": "Request student",
    "name": "GetStudent",
    "group": "Queue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uuid",
            "description": "<p>req params user uuid to identify who</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/queue/student/f773d9cc72bcd",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "response",
            "description": "<p>result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"status\": \"ok\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "AccessDeniedError",
            "description": "<p>Student id not valid</p>"
          },
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 403 Access Denied Error\n{\n    \"code\": 403,\n    \"message\": \"AccessDeniedError: student id not valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "get",
    "url": "/queue/tickets",
    "title": "Request tickets",
    "name": "GetTickets",
    "group": "Queue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "uuid",
            "description": "<p>req query params user uuid to identify who</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "room",
            "description": "<p>req query params sort by room</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/queue/tickets?uuid=f773d9cc72bcd&room=0",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "tickets",
            "description": "<p>list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"created_at\": \"1559565201902\",\n    \"id\": \"7\",\n    \"student_id\": \"bc06b188-5f63-4bdb-bd1e-481efa8e91a3\",\n    \"supervisor\": \"Eric Macia\",\n    \"availability\": false,\n    \"first_name\": \"John\",\n    \"last_name\": \"Doe\",\n    \"major\": \"Informatique\",\n    \"room\": \"O+136\",\n    \"rank\": \"1\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "post",
    "url": "/queue/room",
    "title": "Request room to check id",
    "name": "PostRoom",
    "group": "Queue",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '\n       {\n         \"room\": \"O+205\",\n       }'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/queue/room",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "student",
            "description": "<p>submit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"status\": \"ok\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "post",
    "url": "/queue/student",
    "title": "Request post new student",
    "name": "PostStudent",
    "group": "Queue",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '\n       {\n         \"first_name\": \"John\",\n         \"last_name\": \"Doe\",\n         \"major_id\": 1\n       }'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/queue/student",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "student",
            "description": "<p>submit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"first_name\": \"John\",\n    \"last_name\": \"Doe\",\n    \"major_id\": 1,\n    \"id\": \"3ec531a0-86a4-11e9-b667-91894690ad38\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "post",
    "url": "/queue/tickets",
    "title": "Request post new tickets",
    "name": "PostTickets",
    "group": "Queue",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '\n       {\n         \"supervisor_id\": 0,\n         \"student_id\": \"bc06b188-5f63-4bdb-bd1e-481efa8e91a3\"\n       }'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/queue/tickets",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "Tickets",
            "description": "<p>submit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n      \"id\": 3,\n      \"supervisor_id\": 0,\n      \"student_id\": 1,\n      \"timestamp\":23456709871\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/queue/index.js",
    "groupTitle": "Queue"
  },
  {
    "type": "get",
    "url": "/school/contracts/",
    "title": "Request all the contracts",
    "name": "GetContracts",
    "group": "School",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/contracts",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all contracts</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n      \"id\": 1,\n      \"year\": 2019,\n      \"semester\": \"s1\",\n      \"university_id\": 5,\n      \"speciality_id\": 4,\n      \"link\": \"https://otakedev.com/share/contrats/contrat-etude-sample.pdf \"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/contracts/:speciality",
    "title": "Request all the contracts for a speciality",
    "name": "GetContractsSpeciality",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "speciality",
            "description": "<p>req params get speciality shorthand</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/contracts/IMAFA",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all contracts for a speciality</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n    {\n        \"area\": \"Amérique du Nord\",\n        \"country\": [\n            {\n                \"name\": \"Canada\",\n                \"contract_by_university\": [\n                    {\n                        \"university\": \"Université du Québec à Montréal\",\n                        \"contract\": [\n                            \"https://otakedev.com/share/contrats/contrat-etude-sample.pdf \",\n                            \"https://otakedev.com/share/contrats/contrat-etude-sample.pdf \"\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/courses/",
    "title": "Request all courses",
    "name": "GetCourses",
    "group": "School",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/courses",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all courses</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n      \"id\": 0,\n      \"major_spec_id\": 0,\n      \"ue\": \"UE3\",\n      \"semester\": \"S7\",\n      \"title\": \"Anglais\",\n      \"description\": \"\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/courses/:major",
    "title": "Request all the courses for a major",
    "name": "GetCoursesMajor",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "major",
            "description": "<p>req params get major shorthand</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/courses/SI",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all courses for a major</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n {\n  \"semester\": \"S7\",\n  \"ue\": \"UE3\",\n  \"title\": \"Anglais\",\n  \"description\": \"\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/courses/:major",
    "title": "Request all the courses for a major and for a selected semester",
    "name": "GetCoursesMajorSemester",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "major",
            "description": "<p>req params get major</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "semester",
            "description": "<p>req params get semester</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/courses/SI/S8",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all courses for a major filter by semester</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n      \"semester\": \"S8\",\n      \"ue\": \"UE3\",\n      \"title\": \"Communication 2\",\n      \"description\": \"\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/deadlines/:intervalDate",
    "title": "Request deadlines for a specific date interval",
    "name": "GetDeadLines",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "intervalDate",
            "description": "<p>req params get the interval date</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/courses/SI/S8",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all session for a specific interval</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n    {\n        \"date\": \"2019-01-10T23:00:00.000Z\",\n        \"title\": \"1ère Session\",\n        \"details\": \"Deadline de rendu de dossier PNS et UNS pour le 1er et 2ème semestre\"\n    },\n    {\n        \"date\": \"2019-07-02T22:00:00.000Z\",\n        \"title\": \"2ème Session\",\n        \"details\": \"Deadline de rendu de dossier PNS et UNS uniquement pour le 2ème semestre\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/majors/:shorthand/",
    "title": "Request a major details",
    "name": "GetMajorDetails",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shorthand",
            "description": "<p>req params get major shorthand</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/majors/SI",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "major",
            "description": "<p>details for a specific major</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"title\": \"Informatique\",\n    \"shorthand\": \"SI\",\n    \"icon\": \"fas fa-laptop\",\n    \"header_img\": \"https://i.pinimg.com/originals/80/71/87/8071873252ab2f773d9cc72bcd2d0264.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/specialities/",
    "title": "Request the list of specialities",
    "name": "GetSpecialities",
    "group": "School",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/specialities",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "specialities",
            "description": "<p>list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n      \"id\": 0,\n      \"name\": \"Architecture Logicielle\",\n      \"shorthand\": \"AL\",\n      \"small_picture\": \"https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg\",\n      \"big_picture\": \"https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg\",\n      \"description\": \"{string}\",\n      \"topics_card\": \"Software Architecure, Cloud And Software Modeling\",\n      \"topics_details\": \"{string}\",\n      \"career\": \"{string}\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/specialities/:major/",
    "title": "Request all the specialities for a specific major",
    "name": "GetSpecialitiesMajor",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shorthand",
            "description": "<p>req params get specialities shorthand</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/specialities/SI",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all specialities for a selected major</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"name\": \"Architecture Logicielle\",\n    \"shorthand\": \"AL\",\n    \"small_picture\": \"https://cdn.techopedia.com/images/uploads/analog-clock-clock-diagram-plan-alarm-clock.jpg\",\n    \"topics_card\": \"Software Architecure, Cloud And Software Modeling\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/speciality/:shorthand/",
    "title": "Request a speciality details",
    "name": "GetSpecialityDetails",
    "group": "School",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "shorthand",
            "description": "<p>req params get speciality shorthand</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/speciality/IHM",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "details",
            "description": "<p>of a specific speciality</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"Interface Homme-Machine\",\n    \"shorthand\": \"IHM\",\n    \"small_picture\": \"https://lemonadverts.com/wp-content/uploads/2018/04/app-design.png\",\n    \"big_picture\": \"https://lemonadverts.com/wp-content/uploads/2018/04/app-design.png\",\n    \"description\": \"{string}\",\n    \"topics_card\": \"{string}\",\n    \"topics_details\": \"{string}\",\n    \"career\": \"{string}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/supervisors/",
    "title": "Request all supervisors",
    "name": "GetSupervisors",
    "group": "School",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/supervisors",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all supervisors</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n      \"id\": 0,\n      \"name\": \"Maria-Paola Santisi d’Avila\",\n      \"title\": \"Correspondant RI - GE\",\n      \"email\": \"maria-paola.santisi-davila@polytech.unice.fr\",\n      \"category\": \"Echange-SI\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/school/courses/",
    "title": "Request all supervisors by category",
    "name": "GetSupervisorsCategory",
    "group": "School",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/school/supervisors/Echange-SI",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all supervisors for a specific category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  {\n    \"id\": 6,\n    \"name\": \"Anne-Marie Pinna\",\n    \"title\": \"Correspondant RI - SI\",\n    \"email\": \"anne-marie.pinna@polytech.unice.fr\",\n    \"category\": \"Echange-SI\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "post",
    "url": "/school/email",
    "title": "Request send a mail to a supervisor",
    "name": "PostMailSupervisor",
    "group": "School",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '\n       {\n         \"firstName\": \"John\",\n         \"lastName\": \"Doe\",\n         \"emailSender\": \"john.doe@mail.com\",\n         \"emailReceiver\": [\n           \"pierre.brigode@polytech.unice.fr\"\n         ],\n         \"object\": \"Bourse\",\n         \"message\": \"I would like some informations\"\n       }'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/school/email",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "testimonial",
            "description": "<p>submit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/school/index.js",
    "groupTitle": "School"
  },
  {
    "type": "get",
    "url": "/universities/areas",
    "title": "Request list of areas",
    "name": "GetAreas",
    "group": "Universities",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/areas",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of areas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 0,\n     \"area_name\": \"Europe\",\n     \"shorthand\": \"EU\",\n     \"icon\": \"https://otakedev.com/share/images/areas/EU.png\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/financialAids",
    "title": "Request details for financial aids",
    "name": "GetFinancialAids",
    "group": "Universities",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/financialAids",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of all financial aids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"name\": \"{html}\",\n     \"description\": \"{html}\",\n     \"conditionsToApply\": \"{html}\",\n     \"termsOfPayment\": \"{html}\",\n     \"procedure\": \"{html}\",\n     \"cumul\": \"{html}\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/testimonials",
    "title": "Request testimonials list",
    "name": "GetTestimonial",
    "group": "Universities",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/testimonials",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "testimonials",
            "description": "<p>list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"university\": \"Université Fédérale de Rio de Janeiro\",\n     \"first_name\": \"Luc\",\n     \"last_name\": \"Armel\",\n     \"email\": \"luc.armel@etu.univ-cotedazur.fr\",\n     \"nationality\": \"FR\",\n     \"picture\": \"https://otakedev.com/share/images/users/4\",\n     \"text\": \"{string}\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "post",
    "url": "/universities/testimonial",
    "title": "request sumbit a new testimonial",
    "name": "GetTestimonial",
    "group": "Universities",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d '{\n         \"token\": \"918fcc5c2536766331740ebb9e524f74\",\n         \"form\": {\n           \"first_name\": \"Charle\",\n           \"last_name\": \"Carna\",\n           \"email\": \"charle.carna@mail.com\",\n           \"major_id\": 2,\n           \"university_id\": 0,\n           \"text\": \"YEAH !\"\n         }\n       }'\n       -H \"Content-Type: application/json\" -X POST http://localhost:3000/universities/testimonial",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "testimonial",
            "description": "<p>submit</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"validy\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Token is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n  \"code\": 403,\n  \"message\": \"something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/page=:page",
    "title": "Request universities list by page",
    "name": "GetUniversities",
    "group": "Universities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>req params get the corresponding page (15 results per page)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>query params get the universities by area</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>query params get the universities by language</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "major",
            "description": "<p>query params get the universities by major</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "terms",
            "description": "<p>query params get the universities by search terms</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/page=0?area=AS&language=Français&major=GE\ncurl -i http://localhost:3000/universities/page=0?area=AS&major=GE&search=city",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "universities",
            "description": "<p>list of universities information to populate cards</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n   \"id\": 40,\n   \"name\": \"Universidad de Sevilla\",\n   \"admission_rate\": 50,\n   \"type_of_file\": \"Dossier Erasmus\",\n   \"cost_of_living\": 1000,\n   \"nb_of_place\": 3,\n   \"small_picture\": \"https://otakedev.com/share/universities/small/41\",\n   \"city\": \"Séville\",\n   \"country\": \"Espagne\",\n   \"area\": {\n       \"id\": 0,\n       \"name\": \"Europe\",\n       \"shorthand\": \"EU\",\n       \"icon\": \"https://otakedev.com/share/images/areas/EU.png\"\n   },\n   \"major\": [\n       \"SI\",\n       \"GB\"\n   ],\n   \"language\": [\n       {\n           \"id\": 0,\n           \"language\": \"Anglais\",\n           \"icon_url\": \"https://otakedev.com/share/flags/USA.png\"\n       }\n   ]\n },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/search=:terms",
    "title": "Request universities list by search terms",
    "name": "GetUniversitiesByTerms",
    "group": "Universities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "terms",
            "description": "<p>req params get searching terms to look for universities</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/search=univ",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "universities",
            "description": "<p>list of universities by search terms</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 0,\n     \"name\": \"Université Fédérale de Rio de Janeiro\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/details/:id",
    "title": "Request details of a university",
    "name": "GetUniversityDetails",
    "group": "Universities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>req params get University Id</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/details/19",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "University",
            "description": "<p>details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"name\": \"City University Hong Kong (CityU)\",\n    \"big_picture\": \"https://otakedev.com/share/universities/big/cityu\",\n    \"presentation_text\": \"{html}\",\n    \"admission_text\": \"{html}\",\n    \"student_life_text\": \"{html}\",\n    \"testimonial\": [\n        {\n            \"id\": 2,\n            \"university_id\": 19,\n            \"major_id\": 6,\n            \"first_name\": \"Anass\",\n            \"last_name\": \"Hu\",\n            \"email\": \"anass.hu@etu.univ-cotedazur.fr\",\n            \"nationality\": \"MA\",\n            \"picture\": \"https://otakedev.com/share/images/users/1\",\n            \"text\": \"{string}\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/languages",
    "title": "Request languages",
    "name": "Getlanguages",
    "group": "Universities",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/languages",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of languages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 0,\n     \"language\": \"Anglais\",\n     \"icon_url\": \"https://otakedev.com/share/flags/USA.png\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  },
  {
    "type": "get",
    "url": "/universities/majors",
    "title": "Request majors",
    "name": "getMajors",
    "group": "Universities",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/universities/majors",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json[]",
            "optional": false,
            "field": "list",
            "description": "<p>of languages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n {\n     \"id\": 0,\n     \"language\": \"Anglais\",\n     \"icon_url\": \"https://otakedev.com/share/flags/USA.png\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "type": "json",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>Element has not been found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n    \"code\": 404,\n    \"message\": \"please check URL\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/universities/index.js",
    "groupTitle": "Universities"
  }
] });
