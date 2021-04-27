const mongoose = require("mongoose");

// Connection à la base de donnée mongoose
mongoose
    .connect(
        "mongodb+srv://becode:bouboul23@cluster0.1ysv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //chemin
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
