module.exports = {
    path: "/users/:id/name",
    query: `
        SELECT name 
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