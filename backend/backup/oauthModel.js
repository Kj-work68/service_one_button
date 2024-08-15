const bcrypt = require('bcryptjs');

const clients = [
    { clientId: 'yourClientId', clientSecret: 'yourClientSecret', grants: ['password', 'refresh_token'] },
];

const users = [
    { id: 1, username: 'user1', password: bcrypt.hashSync('password1', 8) },
];

const model = {
    getAccessToken: async (token) => {
        return { accessToken: token, client: {}, user: users[0] };
    },
    getClient: async (clientId, clientSecret) => {
        const client = clients.find(c => c.clientId === clientId && c.clientSecret === clientSecret);
        if (client) {
            return client;
        }
        return false;
    },
    saveToken: async (token, client, user) => {
        return { accessToken: token, client, user };
    },
    getUser: async (username, password) => {
        const user = users.find(u => u.username === username);
        if (user && bcrypt.compareSync(password, user.password)) {
            return user;
        }
        return false;
    },
};

module.exports = model;
