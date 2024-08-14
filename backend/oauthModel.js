const bcrypt = require('bcryptjs');

const users = [
    { id: 1, username: 'user1', password: bcrypt.hashSync('password1', 8) },
];

const model = {
    getAccessToken: async (token) => {
        return { accessToken: token, client: {}, user: users[0] };
    },
    getClient: async (clientId, clientSecret) => {
        return { clientId, clientSecret, grants: ['password', 'refresh_token'] };
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
