const { readFileSync } = require('fs');
const login = require('facebook-chat-api');

const appStates = { appState: JSON.parse(readFileSync(__dirname + "/appstate.json","utf-8"))}


login(appStates,(err,api)=>{
    if(err) return console.error(err)
})


