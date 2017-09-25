const app = "I don't do much.";

const token = 'b52671d77a695200b52864ea487906f61d4b39b8'
fetch('https://api.github.com/jilli26/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
