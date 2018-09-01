const chalk = require('chalk')
module.exports = error => {
    console.log(chalk.red(`An error occured. Here's what happened:\n${error.stack}`))
}