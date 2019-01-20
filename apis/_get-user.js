module.exports = {
    path: "/users/:id",
    query: `
        SELECT id, name, age 
        FROM users
        WHERE id = :id`,
    method: "get",
    dbName: "my_postgres",
    variables: [{
            name: 'id',
            type: "number",
            required: true,
            origin: "path"
    }]
}