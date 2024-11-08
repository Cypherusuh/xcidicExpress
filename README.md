## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Tasks

Here's listed the tasks given for each points.

### Endpoint

GET /users : get all users
POST /users : add new user
POST /auth/login : authenticate user to see its protected Profile
GET /users/profile : requires Header JWT Bearer token after Login. Protected Route.

### Validation

using class-validator library to check if name, password, and email is sufficiently correct

### DB Integration

using postgres, data is successfully synchronized using module.ts

### Middleware & Security

using JWT and friends, it encrypt password and making sure Protected Route can't be accessed.

### Custom Decorator

I created custom decorator to check for current user after logging in

### Pagination

user can use pagination by inputing /users?page=2 or other number of page. I set it with limit of 10