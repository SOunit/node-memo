# points

- RestAPI requirement includes for server to be stateless
- token auth is stateless auth
- token auth is standard for Restful API

# Token Auth

- how to protect data
  - add auth info to token
  - verify token before access to secure data

# first question. why need to search Auth

- what are the auth approaches

  - what is options?
  - which one is the best?
    - Token Auth is the best for Restful API
      - good with horizontal scaling because token stays in client side
      - Restful API require stateless, and token is stateless approach

- how can you guarantee the application is secure?

  - use can get data without checking credential
  - what is the production level standard way to checking credential
  - portfolio side project is not good enough

- need to search to understand how to guarantee secure API
