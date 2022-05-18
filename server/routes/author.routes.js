const AuthorController = require("../controllers/author.controller");


module.exports = (app)=>{
    app.get("/api", AuthorController.sayHello);

    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}