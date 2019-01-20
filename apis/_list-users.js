module.exports = {
    path: "/users",
    query: `
        SELECT id, name, age 
        FROM users
        ORDER BY name`,
    method: "get",
    dbName: "my_postgres"
}