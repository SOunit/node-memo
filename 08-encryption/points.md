- create hashed password using `bcrypt`

  - 12 times is fast and secure enough

  ```
  const hashedPassword = await bcrypt.hash(password, 12)
  ```

- check if password is correct using `bcrypt`
  ```
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword)
  ```
