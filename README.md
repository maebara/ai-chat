# ai-chat
the idea of this application is a poc of one-to-one chat using openAI https://beta.openai.com/overview
![sefl-bot-chat](https://user-images.githubusercontent.com/37244856/146657868-2d9b30b3-8512-4e3b-8ffd-3cc1d977c0ec.png)

you can add a initial chat text, then the conversation is autocompleted.

you must add your own api key.

`properties.json`

```json  
  {
    "api_key": "YOUR_API_KEY", //put your api key here
    "initial_text" : "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:", // initial chat status 
    "chat_length": 10 // number of responses
  }
```

Another examples of initial chat.

##### Hello
`"initial_text" : "You: Hello\nFriend:"`

![hello](https://user-images.githubusercontent.com/37244856/146659250-bc094065-f51f-4e84-b0eb-0e118e8615df.png)

##### About his Dog.
`"initial_text" : "You: Oh hello. Is this your dog?\nFriend: Yes, this is Rex.\nYou: Hello Rex. What a cute dog. What type of dog is he?\nFriend: He’s a pug.\nYou: Oh. I should have guessed. He looks quite well-behaved.\nFriend:"`

![pet](https://user-images.githubusercontent.com/37244856/146659249-3d37875c-c3f1-46fc-9042-92c7a4741167.PNG)

i didnt expect this level of response, the bot itself recognized the situation of testing and builded a good final response. he didnt care about the turn of each person...


