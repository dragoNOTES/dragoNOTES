import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
import fetch from 'node-fetch';
import cookieSession from 'cookie-session';
const app = express();

// SECRET KEYS needed for GitHub OAuth located in .env

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;

// creates a session cookie using DRAGONOTES cookie_secret
// that is in the .env file

app.use(
  cookieSession({
    secret: cookie_secret,
  })
);

// TEST: ensures that client_id and client_secret exist
console.log({ client_id, client_secret });

// HOME: route to landing page of the app
app.get('/', (req, res) => {
  res.send('oauth server test');
});

// LOGIN W/ GITHUB: when button is clicked, user is redirected
// to GitHub with DRAGONOTES client_id provided from .env
app.get('/login/github', (req, res) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:9000/login/github/callback`;
  res.redirect(url);
});

// getAccessToken: delivers DRAGONOTES' client_id, client_secret, and code
// (code user gets from GitHub once user authorizes signin ) to GitHub API
// that authenticates DRAGONOTES

async function getAccessToken(code) {
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
    }),
  });
  const data = await res.text();
  const params = new URLSearchParams(data);
  return params.get('access_token');
}

// getGithubUser: delivers access_token to GitHub, which
// grants DRAGONOTES permission to access user data

async function getGithubUser(access_token) {
  const req = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
  const data = await req.json();
  return data;
}

// route goes back to GitHub with code and exchanges the code
// for the access_token

app.get('/login/github/callback', async (req, res) => {
  const { code } = req.query;
  const token = await getAccessToken(code);
  const githubData = await getGithubUser(token);
  if (githubData) {
    req.session.githubId = githubData.id;
    req.session.token = token;
    res.redirect('/admin');
  } else {
    console.log('Error');
    res.send('Error happened');
  }
});

// if the GitHubId is equal to the userID then grant them access
// otherwise give them a link that redirects them to the login

app.get('/admin', (req, res) => {
  if (req.session.githubId === 66573803) {
    res.send(`Hey Jon <pre>${JSON.stringify(req.session)}`);
  } else {
    res.send('Not authorized, <a href="/login/github">login</a>');
  }
});

// LOGOUT: upon logging out, cookie is set to null, session is terminated
// user is redirected back to the homepage

app.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log('Listening on Port 9000'));
