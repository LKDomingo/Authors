const Author = require("../models/author.model");//import the model so tha thte controller knows how to talk to the databas to query the database

module.exports.sayHello = (req, res) => {
    res.json({ msg: "Hello Author API test" });
}

//find all authors
module.exports.findAllAuthors = (req, res) => {
    console.log('-----finding all authors-----')
    Author.find()
        .then(allAuthors => {
            res.json({ results: allAuthors });
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//create an author
module.exports.createAuthor = (req, res) => {
    console.log("-----creating an author-----")
    //req.body represents form information
    Author.create(req.body)
        .then(newAuthor => {
            res.json({ results: newAuthor })
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//find one author
module.exports.findOneAuthor = (req, res) => {
    console.log('-----finding one author-----');
    console.log('req.params.id: ', req.params.id);
    Author.find({ _id: req.params.id })
        .then(oneAuthor => {
            res.json({ results: oneAuthor })
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//update an author
module.exports.updateAuthor = (req, res) => {
    console.log("-----updating an author-----")
    Author.findOneAndUpdate(
        { _id: req.params.id }, //specify which author to update
        req.body, //specify the form information to update the author with 
        { new: true, runValidators: true }  //make sure we have new content and validate it
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor });
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}

//delete an author
module.exports.deleteAuthor = (req, res) => {
    console.log('-----deleting one author-----');
    Author.deleteOne({ _id: req.params.id })
        .then(deletedAuthor => {
            res.json({ results: deletedAuthor });
        })
        .catch(err => {
            res.json({ msg: "Something went wrong", error: err })
        })
}
