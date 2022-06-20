# url

- JWT Authentication Tutorial - Node.js
  https://www.youtube.com/watch?v=mbsmsi7l3r4

# create secret string

```
node

require('crypto').randomBytes(64).toString('hex')
```

# refresh token

- to set expire time
- to stop permanent access allow
- to prevent make user login manually again

# flow

## login

- client: login with email / password
- server: generate token / refresh-token
- server: response with token

## get data

- client: make request with token
- server: verify token

- server: return error if token is not valid

- server: get user-data from token
- server: access data using user-data from token
- server: return data

## refresh token

- client: token expires
- client: make refresh token request
- server: check stored token
- server: generate token
- server: send token back to client

## logout

- client: send refresh token to server
- server: delete refresh token from server
