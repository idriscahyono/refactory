const axios = require("axios");
const UserServices = require("./userInfoService");
const config = require("../config");

function callback(req, res) {
  const body = {
    client_id: config.config.clientId,
    client_secret: config.config.clientSecret,
    code: req.query.code,
  };
  const options = { headers: { accept: "application/json" } };
  axios
    .post(`${config.config.oauthUrl}/access_token`, body, options)
    .then((res) => {
      return res.data.access_token;
    })
    .then(async (accessToken) => {
      const user = await UserServices.getUserInfo(accessToken);
      res.json({
        data: {
          login: user.login,
          githubId: user.id,
          avatar: user.avatar_url,
          email: user.email,
          name: user.name,
          location: user.location,
        },
      });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

module.exports = {
  callback: callback,
};
