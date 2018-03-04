require('dotenv').config();
const express = require('express')
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, bodyParser = require('body-parser');

const rec_controller = require('./controllers/rec_controller');

const {
    CONNECTION_STRING,
    SESSION_SECRET,
    SERVER_PORT,
    CLIENT_ID,
    CLIENT_SECRET,
    DOMAIN,
    CALLBACK_URL
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

const app = express();

app.use(bodyParser.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');
    db.find_user([profile.id]).then(users => {
        if (!users[0]) {
            db.create_user([profile.id]).then(res => {
                done(null, res[0].id)
            })
        } else {
            done(null, users[0].id)
        }
    })

    
}))

passport.serializeUser((id, done) => {
    done(null, {
        id,
        picture: 'https://robohash.org/me'
    });
})

passport.deserializeUser((user, done) => {
    const db = app.get('db');
    console.log('user ', user); 
    db.find_session_user([user.id]).then(res => {
        done(null, res[0])
    })
})

//authentication

app.get('/api/auth/login', passport.authenticate('auth0'));
app.get('/api/auth/login/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3005/api/auth/setUser',
    failureRedirect: 'http://localhost:3005/api/auth/login'
}))

app.get('/api/auth/setUser', (req, res) => {
    console.log('req.user ', req.user);
    res.redirect('http://localhost:3000/');
})

app.get('/api/auth/authenticated', (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(403).send('nah');
    }
})
app.get('/api/auth/logout', (req, res) => {
    req.logOut();
    console.log(req);
    res.redirect('http://localhost:3000/#/auth');
})

//

// Recommended People

app.post('/api/recommended', rec_controller.getPeople)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));