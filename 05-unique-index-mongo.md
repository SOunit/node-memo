# add sample from ciccc

nodejs203-main/src/models/user.js

```
const { ObjectId } = require('mongodb')
const { InitiateDatabase } = require('../loaders/mongodb')

module.exports = class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    save(){
        const dbo = InitiateDatabase()
        dbo.collection('users').createIndex({ email: 1 }, { unique: true })
        return dbo.collection('users').insertOne(this)
    }

    static find(email){
        const dbo = InitiateDatabase()
        return dbo.collection('users').findOne({ email })
    }
}
```
