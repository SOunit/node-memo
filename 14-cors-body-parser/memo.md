# url

- Express JS— body-parser and why may not need it
  https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

# points

- express includes body-parser package now
  - json
  - urlencoded

# sample

## json

```
app.use(bodyparser.json()); //utilizes the body-parser package
```

```

app.use(express.json()); //Used to parse JSON bodies

```

## url encoded

```
app.use(bodyParser.urlencoded({extended: true}));
```

```
app.use(express.urlencoded()); //Parse URL-encoded bodies

```
