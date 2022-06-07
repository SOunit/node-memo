# url

- Redis Crash Course
  https://www.youtube.com/watch?v=jgpVdJB2sKQ

# redis

- performance and cache usage
- get data fast instead of accessing data base and slow!
- in memory, high performance, but not persistent
- NoSQL
- Key-Value

# commands

## login

- run local redis

```
redis-server
```

- access redis

```
redis-cli
```

- exit redis-cli

```
quit
```

## set key-value basic

- set data

```
SET name Jack
```

- get data

```
GET name
```

- delete data

```
DEL name
```

- check exist

```
EXISTS name
```

- search key

```
KEYS *
```

- delete all

```
flushall
```

- time to live / expiration

```
ttl name
```

- expire in 10 seconds

```
expire name 10
```

- create with expiration

```
setex name 5 Jack
```

## array / list

- create list / add to list

```
lpush friends Jack
```

- get from list

```
lrange friends 0 -1
```

- add to last

```
rpush friends Jack
```

- remove first item from list

```
lpop friends
```

- remove last item from list

```
rpop friends
```

## set type / for unique value

- add set

```
sadd hobbies "aaa bbb"
```

- list all

```
smembers hobbies
```

## hash / like object / person.name

- set data

```
hset person name Jack
```

- get data

```
hget person name
```

- get all data

```
hgetall person
```

- delete hash

```
hdel person name
```

- check exist

```
hexists person name
```
