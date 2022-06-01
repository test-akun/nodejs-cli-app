// THIRD PARTY PACKAGE
const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

// BUILT-IN PACKAGE
const fsPromise = require('fs/promises')
const fs = require('fs')
const path = require('path')

const logEvents = async (message, logName) => {
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromise.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromise.appendFile(path.join(__dirname, 'logs', logName), logItem)
    } catch (error) {
        console.error(error)
    }
}

console.log(process.env.NODE_VERSION)

module.exports = logEvents