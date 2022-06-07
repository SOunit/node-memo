# passport

- for auth
- passport has many way to login
  - local email / password
  - google
  - facebook
  - etc.
- initialize passport with strategy (local / google / facebook)

# steps

- install

```
npm i passport passport-local
```

- `express-session` for manage user login state
- `express-flash` for auth message like error or success
- `method-override` is for delete request from html ( html form do not support delete request)
