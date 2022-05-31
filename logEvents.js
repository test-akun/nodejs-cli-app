// THIRD PARTY PACKAGE
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

// BUILT-IN PACKAGE
const fsPromise = require('fs/promises')
const fs = require('fs')
const path = require('path')

const logEvents = (message) => {

}

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))

console.log(uuid())

console.log(process.env.NODE_VERSION)