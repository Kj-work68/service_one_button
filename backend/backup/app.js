// const express = require('express');
// const OAuth2Server = require('express-oauth-server');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.oauth = new OAuth2Server({
//     model: require('./oauthModel'),
//     grants: ['password', 'refresh_token'],
//     debug: true,
// });

// // Auth routes
// const authRoutes = require('./routes/auth');
// app.use('/auth', authRoutes);

// app.post('/oauth/token', app.oauth.token());

// // Secure route
// app.get('/secure', app.oauth.authenticate(), (req, res) => {
//     res.json({ message: 'This is secure data.' });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
