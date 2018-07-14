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
                ],
                footer: "Author: Proxxa#0574"

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
            ],
            footer: "Author: Proxxa#0574"
        }})
    } else
    if (args[0] === "Array" && args[1] === "Actions") {
        message.channel.send({embed:{
            color: 777777,
            title: "LearnToCode BOT - Array Actions",
            description: "Array actions, you saw one in the `Try it!` section of the Arrays course. These actions \
can be used on regular strings if they're the correct actions. So, lets get right into it. `shift()`, as seen in \
the `Try it!` section of `Arrays`, will not only `return` the first item in the array, but also removes it. \
`split()` is a great one to use to separate each and every word of a string into a list. It can do that if its \
entered parameter says `' '`, meaning to turn the string into an array, but they items separate on every space. \
You can use it to also separate on every underscore (`_`) using `split('_')`, rinse and repeat for every character \
you need to separate on. `slice()` is great for entirely removing an item. Want to remove item 3 of `foobar`? Just \
use `foobar.slice(2)`, (2 since JS is zero indexed). You can also use this to remove certain characters or groups \
of characters by separating the first and last characters you want to remove (If you want to remove the fourth to \
eighth characters, use `slice(3,7)`.) with a comma (`,`). Characters are treated like items in an array with slice() \
so rinse and repeat for your arrays. `pop()` is useful for taking away the LAST item from the end, and returning it \
just like `shift()`. `push()` can add an item(s) to the end of the list, like this NEXT item. `unshift()` is just \
like `push()`, but it adds items to the beginning, like the opposite of `shift()`.",
            footer: "Author: Proxxa#0574",
            fields: [
                {
                    name: "Try it!",
                    value: "**1. **Create a javascript file (`.js`) that declares a variable called `func`, and set it to an array \
with the first item `tion`, and then add nine more items of your choice. Now log the array to the console with your \
old pal `console.log()`. You should know how to use it by now, so go ahead. Now log it again, but instead log \
`func.shift()`. It only output `tion`. Cool, right? Now log just `func` again. Now it doesn't have `tion`, but it \
replied with everything else. Now log `func.slice(x,x)` but place two numbers from 0 to 8. You can even do only one. \
It just removed those permanantly from the array.\n**2.** Create a variable called `func` which is set to an array \
in an entirely different file (Javascript again). Now use `unshift()` and `push()` to give the array some more items. \
Now, I want you to log `func` before you log `func.pop()`. It should've logged just the last item in the array the \
second time. Now log the regular array again, and it should have logged everything except for that last item.",
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
                    value: "`Currently implemented sections include:`\n**Primitive Types**\n**Arrays**\n**Array Actions**\n`Names are case sensitive`\n`~js <section>"
                }, ],
                color: 777777,
                icon_url: client.user.avatarURL,
                picture: client.user.avatarURL,
            }
        })
};