const axios = require("axios")
const properties = require("./properties.json")
const initialText = properties.initial_text
const apikey = properties.api_key
const chatLength = properties.chat_length

function Chat(apikey, initialText) {
    let text = initialText
    let response = {}
    let name = ""
 
    async function execute(times){
        print(text)
        for(i = 0; i < times; i++){
            name = i%2? "Friend": "You"
            response = await callAPI(name, text)
            text = text.concat(response.data.choices[0].text);
            print(response.data.choices[0].text)
            await delay(1000)
        }
    }

    function print(text){
        process.stdout.write(text)
    }
    
    function callAPI(name, text){
        return axios.post("https://api.openai.com/v1/engines/davinci/completions",
            { 
                "prompt": text,
                "temperature": 0.4,
                "max_tokens": 60,
                "top_p": 1.0,
                "frequency_penalty": 0.5,
                "presence_penalty": 0.0,
                "stop": [`${name}:`]
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apikey}`
                }
            })
    }

    function delay(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms); //this can be dangerous, cant understand if populates a lot of setTimeouts
        });
      }

    return {
        execute: execute   
    }
}

const chat = Chat(apikey, initialText)
chat.execute(chatLength)
