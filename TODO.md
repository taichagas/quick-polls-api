IS_LOGGED - está logado
HAS_ACCESS - usuário tem permissão de acessar recurso

## Public routes

### /polls

GET

### /polls/join

POST

## Private routes

### /user/polls

GET, POST, PATCH, DELETE

- check user exists _(do i need it with clerk??)_
- check user is logged in
- check user has permission to access resource
