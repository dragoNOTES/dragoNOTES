const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const { request } = require('http');
const { URL } = require('url');

const client_id = process.env.GITHUB_CLIENT_ID
const client_secret = process.env.GITHUB_CLIENT_SECRET

console.log({client_id}, client_secret);

app.use(express.json());


// send user to login to github
app.get('login/github', (req, res) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_http://localhost:9000//user/signin/callback`
  res.redirect(url)
})

aysnc function getAccessToken(code) {
  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: "POST";
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  })
  const data = await res.text();
  const params = new URLSearchParams(data);
  return params.get('access_token');
}

aysnc function getGithubUser(access_token){
  const req = fetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${acess_token}`
    }
  })
  const data = await req.json()
  return data
}


app.get('/user/signin/callback', aysnc (req, res) => {
  const code = req.query.code;
  const token = await getAccessToken(code);
  const githubData = await getGithubUser(token);
  res.json({token})
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () = console.log('Listening on Port 9000'));
