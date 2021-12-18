const axios = require("axios")
const initialText = "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:";
const apikey = ""

 function Chat(apikey, initialText) {
    let text = initialText
    let response = {}
    let name = ""
 
    async function execute(times){
        print(text)
        //for(i = 0; i < times; i++){
         //   name = i%2? "Friend": "You"
        response = await callAPI("You", text)
        text = text.concat(response.data.choices[0].text);
        print(response.data.choices[0].text)
        //}
        response = await callAPI("Friend", text)
        text = text.concat(response.data.choices[0].text);
        print(response.data.choices[0].text)

        response = await callAPI("You", text)
        text = text.concat(response.data.choices[0].text);
        print(response.data.choices[0].text)
        
        response = await callAPI("Friend", text)
        text = text.concat(response.data.choices[0].text);
        print(response.data.choices[0].text)

        response = await callAPI("You", text)
        text = text.concat(response.data.choices[0].text);
        print(response.data.choices[0].text)

        response = await callAPI("Friend", text)
        text = text.concat(response.data.choices[0].text);
        print(response.data.choices[0].text)
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

    return {
        execute: execute   
    }
}

const chat = Chat(apikey, initialText)
chat.execute(2)
