# url

https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12025778#overview

# memo

- types of errors

  - technical / network errors
    - mongodb down
    - show error to users
    - almost nothing we can do
  - expected errors
    - file can't read
    - db operation failed
    - inform user, maybe retry
  - bugs / logical errors
    - fix bugs in development

- handling errors

  - Error is thrown
    - syntax
      - try-catch
      - then-catch
    - how to handle errors
      - directly handle errors
      - use express error handling functions
  - Error is NOT thrown
    - validate errors
      - throw error
      - directly handle error
