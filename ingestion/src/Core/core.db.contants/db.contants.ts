export interface IDatabaseConfigAttributes {
  username?: string
  password?: string
  database?: string
  host?: string
  port?: any
  dialect: string
  urlDatabase?: string
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes
  test: IDatabaseConfigAttributes
  production: IDatabaseConfigAttributes
}
