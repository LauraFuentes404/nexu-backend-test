module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT_APP: process.env.PORT || 3000,
    USERBD: process.env.USERDB || 'postgres',
    DATABASE: process.env.DB || 'nexu',
    PASSWORD: process.env.PASS || '123456',
    PORT_DB: process.env.PORT_DB || 5432,
    DIALECT: 'postgres',
}
  