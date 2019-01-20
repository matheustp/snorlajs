module.exports = {
    path: "/recipes",
    query: `SELECT name, description 
        FROM recipes
        ORDER BY name`,
    dbName: "my_postgres"
}