const mongoose = require('mongoose');
const app = require('./app'); // your Express app
const os = require('os');

const PORT = 3000;

// Function to get the local IP address
function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'localhost';
}

const ip = getLocalIp();

const mongoURL = "mongodb+srv://admin:wFavJEuWpAfRd5x1@cluster0.xkftiax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server running on http://${ip}:${PORT}`);
        });
    })
    .catch(err => console.error(err));