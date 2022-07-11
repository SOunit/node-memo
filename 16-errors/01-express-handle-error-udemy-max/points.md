- use error handling code to avoid for error to crush app

  - try-catch, for sync code
  - then-catch, for async code

- throw new error in middleware

  - connect to express error handling mechanism

- redirect to another page if catch error

  - to same page if error is temporary with error message
  - to error page if error is not temporary
    - 500.ejs

- express error handling middleware
  - to avoid duplicate code
  - use next with error, this skips all other middleware, leads to error handling middleware directly
  ```
  const error = new Error('Error message')
  next(error)
  ```
  ```
  app.use((error, req, res, next)=>{})
  ```
