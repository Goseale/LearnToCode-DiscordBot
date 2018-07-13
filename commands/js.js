exports.run = function (client, message, args) {
    message.channel.send("`JS` request recieved").then(response => response.delete(3000))
    if (args[0] === "Primitive" && args[1] === "Types") {
        message.channel.send({
            embed: {
                title: "LearnToCode BOT - JS Types",
                description: "Welcome to the very basic basicness of JS. Primitive Types. \
Very primitive to any Javascript Master. They come in four types. `Truthy/Falsy`, \
`Undefined/Null`, `Number`, and `String`. `Truthy/Falsy` are as you can tell, `True` \
and false. You literally type them as straight `True` and `False` in your code. `Undefined` \
and `Null` are what output when there is no input, or real input. Finally, `Number`, you type them \
just like `True`, `False`, `Undefined`, and `Null`, just type out the number, as simply as that. \
Now for maybe the biggest of them all, `String`. This that you're reading is one big long string. \
Thank goodness for long string shortcuts that I'm able to type it all out and __still__ be able to read \
it. This is actually written inside of the parameters of `String()`, or with Quotation marks around it (\"). \
Maybe even single quotes (') if you don't care to escape them with backslashes.",
                color: 777777,
                fields: [
                    {
                        name: "Try it!",
                        value: "Open up your IDE/Text Editor and input the following\n \
```js\nconsole.log(typeof(1))```\n and replace \"1\" with any of the primitive types. Then run the code."
                    }
                ]

            }
        })
    } else
     if (args[0] === "Arrays") {
        message.channel.send({embed:{
            color: 777777,
            title: "LearnToCode BOT - JS Arrays",
            description: "Arrays are like lists. You know, like that shopping list that you totally put off last \
week. Yes, I know about that. Arrays should always be assigned to a variable. It is suggested you use a `let` variable (More on those in another \
course.) as such: `let array = ` and then the array. Arrays look like this: `['foo', 'bar', 'item3']`, and to add more items, you just \
put a comma  (`,`) after the last item and type it up. Items can be any one of the **`Primitive Types`** mentioned in the last \
course. If you call an array, it will simply print out the contents of the array, or everything you typed to set the \
variable as, including the square brackets (`[]`). To call for a specific item, just count the items to the item you \
want to call, and subtract one from it. Replace x with that number: `arrayName[x]`. You subtract one because JS is \
0-Indexed, meaning it starts couting at 0.",
            fields: [
                {
                    name: "Try it!",
                    value: "**1.** In your command prompt, type `node` and hit enter. Then type `let array = ['foo',\
'bar'] and enter. Now log `array` to the console, no quotes. Hit enter, and voila, you logged the entire array. \
now log `array[2]`, this should result in an error, because this is calling for the third item, when there is no \
third item, since JS is zero-indexed.\n **2.** Create your own array called `foobar` with whatever items you want. \
Go ahead, I'll still be here. Now do `console.log(foobar.shift())`. It should've returned the first item. \
Now do `console.log(foobar[0])`. It should return the same thing. Right? Wrong. More on this in **Array Actions**."
                },
            ]
        }})
    } else
        message.channel.send({
            embed: {
                title: "LearnToCode BOT - Javascript",
                description: `This is ${message.author.tag}'s request for the base \`JS\` command reply.`,
                fields: [{
                    name: "Sections",
                    value: "`Currently implemented sections include:`\n**Primitive Types**\n**Arrays**"
                }, ],
                color: 777777,
                icon_url: client.user.avatarURL,
                picture: client.user.avatarURL,
            }
        })
};