const express = require('express');
const axios = require('axios');
const basicAuth = require('express-basic-auth');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic authentication
// You do not need to add AWS IAM users to the app.js file unless you want the same usernames and passwords used for the web interface to match 
// the IAM users’ console login credentials or access keys. However, for security and simplicity, it’s better to keep application-level authentication 
// separate from IAM credentials.

app.use(basicAuth({
    users: { 'WebAppUser1': 'password123',
        'WebAppUser2': 'password123',
        'WebAppUser3': 'password123'  }, // Replace with your credentials
    challenge: true
}));

// Serve login page
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Login to Execute Command</h1>
                <form action="/execute" method="POST">
                    <label>Command: <input type="text" name="command"></label>
                    <input type="submit" value="Execute">
                </form>
            </body>
        </html>
    `);
});

// Handle command execution
app.post('/execute', async (req, res) => {
    const command = req.body.command;
    try {
        // Send command to Win2019-Server-1 (replace with private IP)
        const response = await axios.post('http://<Win2019-Server-1-Private-IP>:8080/execute', { command });
        res.send(`<h1>Result</h1><p>${response.data.result}</p>`);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Web app running on port ${port}`);
});