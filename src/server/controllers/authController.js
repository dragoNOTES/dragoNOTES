require('dotenv').config();
const fetch = require('node-fetch');

// SECRET KEYS needed for GitHub OAuth located in .env

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

const authController = {};

authController.authWithGithub = (req, res, next) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:8080/login/github/callback`;
  res.redirect(url);
};

authController.getAccessToken = async (code) => {
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
  console.log(data);
  const params = new URLSearchParams(data);
  return params.get('access_token');
}

authController.getGithubUser = async (access_token) => {
  const req = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });
  const data = await req.json();
  return data;
}

authController.githubCallback = async (req, res, next) => {
  const { code } = req.query;
  const token = await authController.getAccessToken(code);
  const githubData = await authController.getGithubUser(token);
  if (githubData) {
    console.log('this is the githubdata:', githubData);

    res.locals.userId = githubData.id;
    res.locals.username = githubData.login;
    res.locals.name = githubData.name;
    res.locals.avatar = githubData.avatar_url;

    return next();
  } else {
    console.log('Error in authController.githubCallback');
    res.redirect('/login');
  }
};

module.exports = authController;