- express has error handling middleware

  - access to error handling middleware
    ```
    next(new Error('Error Message'))
    ```
  - error handling middleware
    - less duplicate code

  ```
  app.use((error, req, res, next)=>{
    res.status(error.statusCode).json(message: error.message)
  })
  ```
