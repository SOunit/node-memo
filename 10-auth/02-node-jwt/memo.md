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
