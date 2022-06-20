# Summary

- Auth Tool

  - `passport`
    - implement auth easily
    - local / google / facebook / etc.

# auth server types

- RESTFul API

  - stateless
    - JWT / JsonWebToken

- Stateful Server

  - session
    - `express-session`

- OAuth

# Encrypt

- `bcrypt`

# Session vs Token Authentication in 100 Seconds

# refs

https://www.youtube.com/watch?v=UBUNrFtufWo

## main approaches for user auth

- session / cookie
- token

# session / cookie

- stateful session

## process

1. user submit login form
2. server stores a session / respond with session ID
3. browser puts session ID in cookies
4. browser sends cookies with future request

## disadvantage

- session is not good for horizontal scaling
- vulnerable to attack like
  - CSRF(Cross-site request forgery)

## solution

- token based authentication

# token auth

## process

1. client submits login form
2. server create JWT / Json Web Token
3. browser puts JWT in local storage
4. Signed JWT header validated on future requests
