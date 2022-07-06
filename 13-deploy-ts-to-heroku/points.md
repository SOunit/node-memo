# url

https://www.youtube.com/watch?v=PM4fOeQuCc4

# steps for deploy TS node app to heroku

- use `process.env.PORT` in node app, port come from heroku
- add `postinstall` and `tsc` command to `package.json` for heroku to run js code
- add `"include": ["src/**/*"]` to `tsconfig.json`
- add `Procfile` to root, unique config file for heroku
