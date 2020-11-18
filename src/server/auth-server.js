import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
require('dotenv').config();
import fetch from 'node-fetch';

// const { request } = require('http');
// const { URL } = require('url');
// import cookieSession from "cookie-session";

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const cookie_secret = process.env.COOKIE_SECRET;

console.log({ client_id, client_secret });

app.get('/', (req, res) => {
  // console.log(client_id);
  res.send('oauth server test');
});

// app.use(
//   cookieSession({
//     secret: cookie_secret
//   })
// );

// app.use(express.json());

// send user to login to github
app.get('/login/github', (req, res) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:9000/login/github/callback`;
  res.redirect(url);
});

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

app.get('/login/github/callback', async (req, res) => {
  const { code } = req.query;
  const token = await getAccessToken(code);
  console.log('this is the token:', token);
  res.json({ token });
});

// const githubData = await getGithubUser(token);
// if(githubData){
//   req.session.gitHubId = githubData.id;
//   req.session.token = token;
//   res.redirect('/admin');
// } else {
//   console.log('Error')
//   res.send('Error happened')
// }
// });

// aysnc function getGithubUser(access_token){
//   const req = fetch('https://api.github.com/user', {
//     headers: {
//       Authorization: `bearer ${acess_token}`
//     }
//   })
//   const data = await req.json()
//   return data
// }

// app.get('/admin', (req, res)=> {
//   if(req.session.gitHubId)
// })

// app.get('/logout', (req, res) => {
//   req.session = null
//   res.redirect('/')
// })

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log('Listening on Port 9000'));
