module.exports = {
    PORT:ProcessingInstruction.ENV.port || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development'
}