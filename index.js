const app = "I don't do much.";

const token = ''
fetch('https://api.github.com/jilli26/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
