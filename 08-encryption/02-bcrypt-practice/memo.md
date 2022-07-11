# url

- max, udemy, node
  https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/11954350#overview

# memo

- password should be encrypted for security
- install `bcryptjs`
- encrypt password
  ```
  const hashedPassword = await bcrypt.hash(password, 12);
  ```
