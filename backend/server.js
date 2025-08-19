const mongoose = require('mongoose');
const app = require('./app'); // import the app

const mongoURL = "mongodb+srv://admin:wFavJEuWpAfRd5x1@cluster0.xkftiax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB connected");

        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error(err));