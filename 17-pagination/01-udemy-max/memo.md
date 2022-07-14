# url

- udemy max node
  https://www.udemy.com/course/nodejs-the-complete-guide/learn/lecture/12025922#overview

# manual pagination / steps

- add links `/?page=1`, `/?page=2`,
- get `page` from params in node
- items per page
  ```
  const ITEMS_PER_PAGE = 20;
  ```
- use `skip` function in `mongodb` / `mongoose`

  ```
  // on page 1, skip first 0 items
  // on page 2, skip first 20 items
  // on page 3, skip first 40 items
  find().skip((page - 1) * ITEMS_PER_PAGE)
  ```

- use `limit` to limit items to fetch

  ```
  find()
  .skip((page - 1) * ITEMS_PER_PAGE)
  .limit(ITEMS_PER_PAGE)
  ```
