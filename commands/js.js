exports.run = function (client, message, args) {
    message.channel.send("`JS` request recieved").then(response => response.delete(3000))
    if (args[0] === "Primitive" && args[1] === "Types") {
        message.channel.send({
            embed: {
                title: "LearnToCode BOT - JS Types",
                description: "Welcome to the very basic basicness of JS. Primitive Types. \
Very primitive to any Javascript Master. They come in four types. `Truthy/Falsy`, \
`Undefined/Null`, `Number`, and `String`. `Truthy/Falsy` are as you can tell, `True` \
and `False`. You literally type them as straight `True` and `False` in your code. `Undefined` \
and `Null` are what output when there is no input, or real input (\"Imaginary Numbers\" like to call themselves \
NaN). Finally, `Number`, you type them \
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
        }})
    } else
    if (args.join(' ') === "Array Actions") {
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
        }}).catch(e => console.log(e.stack))
    } else
    if (args.join(' ') === "Basic Functions") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - Basic Functions",
            description: "The basic function, very simple, yet oh so powerful. Its like a bookmark in your code \
that you can execute at ANY time. Here's how you __create__ a simple function: ```js\nfunction funcOne() {\nvar foo = 'bar'\n}\n``` \
This function simply creates a variable called `foo` set to the string `bar`. Not useful __at all__ because of \
__scopes__. If you want to use it, just type `funcOne()` wherever in your code, as long as it has an OK __scope__. \
If we want this function to be useful, we need **parameters**. These go in the parenthesis (`()`), and we must \
tell the function to ask for them. Here's a better function: ```js\nrandom(min,max) {\nlet diff = max - min;\n\
return Math.floor((Math.random() * diff) + min)\n``` This will return a random integer between the inputs `min` \
and `max`. Lets say our minimum is 1 and max is 6. We should call random() by using `random(1,6)`. Commas (`,`) \
separate parameters. Use a parameter inside of the function (and only inside of) by calling it like a variable.",
            fields: [
                {
                    name: "Try it!",
                    value: "Create a function called `func`, with the parameter `tion`. Now tell the function to \
\"Return\" (Look at second example above) the string `Hello World`, but only if `tion` === `1`. Otherwise, return \
`foobar`."
                }
            ],
            color: 777777,
        }})
    } else
    if (args.join(' ') === "If Statements") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - If Statements",
            description: "If you want to get anywhere near to a good JS app, you will absolutely need If Statements. \
The code for this very bot's main purpose relies deeply on if statements. A basic discord bot would rely on if statements \
for all commands, unless it is very powerful, and already uses command handlers. If statements look like this: \
```js\nif (foo) {return 'bar'}\n``` This will \"return\" the string \"bar\" if the variable `foo` has a Truthy value. \
A Truthy value is anything but `False`, `0`, `Null`, `Undefined`, or `NaN`. I could be wrong, but I believe negative \
infinity is also False. There's also `conditions`, like `If I'm exactly like this guy, return true!`. Its entirely \
like an inbuilt if statement, but smart and dumb at the same time. You need to put these inside of something so they \
can be useful. Output if a variable is `1243`? Just log it to the console as a condition! If not, it says `false`. \
if so, it says `true`! However, we can use an if statement to decrease the population of our totally real 'miniverse\
' only if there's not enough food for everyone. ```js\nlet pop = math.random() * 5000 + 1;\n let sus = math.random\
() * 5000 + 1;\nif (pop > sus) {pop = pop - (pop - sus)\nreturn 'They couldn\'t survive'\n};``` This code generates\
 two variables, pop and sus, which \
have values between 1 and 5000. If sustainability is lower than our population, we kill off everyone we can't sustain. \
> and < work like they do in math. If you want to check if two values are exactly alike, use `===`, not one, not two\
, **__three__**. If you want it to __NOT__ be exactly alike, use `!==`. This inverts it. If you want multiple things \
to be true, type `&&` between each condition. If you want it to happen if one of X statements are true, use `||`.",
            color: 777777,
            fields: [
                {
                    name: "Try It!",
                    value: "Here's a little project for you, think of a way to use this. If !== doesn't work, try an \
empty `{}` and put `else {}` after and put the code in the else's brackets. You can also do `(!foo)` if you want \
foo's value to be a falsy."
                }
            ] 
        }})
    } else
    if (args.join(' ') === "Variables") {message.channel.send({embed:{
        title: "LearnToCode BOT - Variables",
        description: "There's three types of variables. Const, let, and var. Const variables are constant, you can't \
change them using regular means. Set them once, and you're done. Let variables will let you define them, and then \
you can forget about typing `let` for that variable again. Var variables are like `let`, except you always type `var`,\
and they can be buggy. Lets say we want to create the variable `a` set to the string `hi`, and we will never want to \
change it. `const a = 'hi'` will let us do that. If we want to be able to change it, lets use let. `let a = 'hi'`.\
Oh wait, we want it to be capitalized! `a = 'Hi'` to change it. You can use var exactly like that, but to capitalize\
our string, lets use `var a = 'Hi'`, because we always have to say var before our \"var\" var to recognize it as a var.",
        fields: [
            {
                name: "Try it!",
                value: "Create a const variable and try changing it. It errored! Now make a let variable and change it.\
 Now how about a `var` variable? That was easy, wasn't it!"
            }
        ]
    }})
    } else
    if (args.join(' ') === "Scope") {message.channel.send({embed:{
        title: "LearnToCode BOT - Scope",
        description: "Now, if you think you can define a variable inside of a function and use it outside,\
you're wrong. Very wrong. This is what we call __Scope__. If you define a variable at the very top of your code,\
outside of __all__ functions, its in the __global scope__. However, if you define a variable in a function, it is \
in the scope of that function. If the function was called `helloWorld`, it would be in the __helloWorld() scope__. \
However, if you define a variable inside of a function, that has the same name as a global scope variable, it will \
overwrite the global function, even if it is a constant.",
        fields: [{
            name: "Try it!",
            value: "Create a function that defines the variable `foo`, set to the string `bar`.\
Now outside of the function, call the function, then log `foo` to the console. It errors, because it is undefined. \
Now define it to `null` outside of the function, but before we call it. It should've worked. Be careful, because you\
 might end up changing something you need to not change."
        }],
        color: 777777
    }})
    } else
    if (args[0] === "NPM" && args[1] === "Setup") {message.channel.send({embed:{
        title: "LearnToCode BOT - NPM Setup",
        description: "NPM is AMAZING for setting stuff up that you don't know how to do regularly, like a discord bot.\
Yes, you could use Ruby, the language you're supposed to make a bot with (The regular stuff), or use JS, which you're\
 learning here. There's many NPM \"Modules\" to install. Maybe you could make colored text in your `console.log`s \
with `chalk`, or let your bot do some neat sound stuff with `ffmpeg-binaries`. First off, we need to set up our \
package.json. You could hand write it, or let Node.js do it for you. Open up a command terminal, and navigate it to \
where your app.js, bot.js, index.js, or server.js will be stored using `dir` and `cd` (or other commands on a non-\
windows OS.). Now run `npm init`. This will begin the process of setting up your package.json. First is the package \
name. Next, our version number. Then a description. An \"Entry Point\", a test command (best left empty), now a git\
 repo. Then some keywords (For making your own npm package). Finally, the author name, A.K.A. your name. License may be \
MIT or ISC. Exit any time by pressing `CTRL + C`",
        color: 777777
    }})
    } else
    if (args[0] === "NPM" && args[1] === "Package" && args[2] === "Installation") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - NPM Package Installation",
            description: "Installing a NPM Package is easy. Once you've set up your package.json, just go to npmjs.com \
and find a package you fancy. Now open your command prompt again, **direct it to your app folder**, then type **__`npm\
 i <packageName>`__**. and thats it. Of course, replace `<packageName>` with the name of the package.\n If you \
have any further questions, try doing `npm help` if it is a question on npm commands",
            color: 777777
        }})
    } else
    if (args.join(' ') === "Licenses") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - Licenses",
            description: "Lets quickly go over what a license is. No, it isn't a fancy thing that allows you to code, \
its a little file that shows who the creator of the app is, and what people who download it are allowed to do with it. \
LearnToCode has an MIT license belonging to Proxxaaa (Hey, the guy who wrote this!). This means that people can redistribute and use the code however. \
even commercially."
        }})
    } else
    if (args[0] === "External" && args[1] === "Files") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - External Files",
            description: "Loading external files is great for things like settings files. \
You can set a variable to a JSON file by setting it to require(\"./settings.json\"), or \
whatever the path to the settings file is. You can also activate other JS files to run \
along-side the main file, and even give those JS files variables to work with. The \
code that handles the messages is triggered by an \"Event Loader\" which is loaded in by \
the main `bot.js` that runs **\"require('./util/eventLoader')(client)\"**, which sends the \
**'client'** variable to the file. The files must be ready for this, though. To receive \
the variable properly, it must give it its own name. This can be the same name. To receive \
it, the file contains the code **module.exports = client => {}**, and the code for running \
the events is inside the curly brackets. If you want to send multiple, you can also do \
**(client, message)** and this will send both the client and message variable, and you must \
put both variables in parenthesis, and their names separated by commas. You can also load \
NPM Packages into a variable to use the package using only a variable. To use 'chalk', you \
can use the code **const chalk = require('chalk')**, but this only works if chalk is installed.",
            color: 777777
        }})
    } else
    if (args[0] === "Accessing" && args[1] === "JSON" && args[2] === "Files") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - Accessing JSON Files",
            color: 777777,
            description: "To access a JSON File's innards, you must first set a variable \
to the wanted JSON File. Read **External Files** if you do not know how to do this. \
This is extremely simple. Let's set up our example file and var. **let grapes = require(\
'./grapes.json')** of course, this can be any var name and JSON file, as long as it is \
referenced correctly. Lets say we have inside of the file: **```json\n\
{\n\
   \"favorite\": \"red\"\n\
}\n```** We now have a variable set to the string **red**, all we need to do is reference \
to **grapes.favorite**! If you have something named **worst**, then you should reference to \
**grapes.worst**."
        }})
    } if (args[0] === "Advanced" && args[1] === "Array" && args[2] === "Actions") {
        message.channel.send({embed:{
            title: "LearnToCode BOT - Advanced Array Actions",
            color: 777777,
            description: "Array actions don't just end at removing certain parts of an array \
or string. Some go through every single item and do something to each, like **.fill()**! \
.fill()'s job is to take every single item in the array and change it to something. If the \
name of our array is **jelly**, and we want every existing item to now be set to the string \
'Strawberry jelly is the best jelly!', then we run **jelly.fill('Strawberry jelly is the best\
jelly!)** and then every one will be set to the string. A bit more advanced one is **.forEach\
**. .forEach is best like an arrow function as long as you're getting something from the array. \
of course, you can always use a **function callback(requested vars) {}** like the documentation \
says, but we're sticking with our old pal the arrow function. Lets keep our jelly array. Now, \
lets go through what vars we request. **jelly.forEach((value, index, array, arg) => {})** is \
the simple code to get every single one. **value** is the value of the item in the array we're \
checking, simple enough. **index** is which item it is, if we're doing something to the third \
item right now, then index is the number `3`. **array** just returns the whole array that we're \
dealing with, or the jelly array in our case. **arg** is useless, its just a way of doing **this**\
if you're dealing with a .forEach in a .forEach, in which case it may be useful. forEach is \
also a great way to log every single item of an array to the console."
        }})
    } else if (!args[0]) {
        message.channel.send({
            embed: {
                title: "LearnToCode BOT - Javascript",
                description: `This is ${message.author.tag}'s request for the base \`JS\` command reply.`,
                fields: [{
                    name: "Sections",
                    value: "`Currently implemented sections include:`\
\n**Primitive Types**\
\n**Variables**\
\n**If Statements**\
\n**Arrays**\
\n**Array Actions**\
\n**Basic Functions**\
\n**Scope**\
\n**NPM Setup**\
\n**NPM Package Installation**\
\n**Licenses**\
\n**External Files**\
\n**Accessing JSON Files**\
\n**Advanced Array Actions**\
\n`Names are case sensitive`\
\n`Use: `**`js <section>`**"
                },
                {   
                    name: "Can't find something?",
                    value: "**Don't worry!** There are tons of forums out there that are for \
these sorts of things, like stackoverflow.com! Of course, there's always the wonders of \
documentation. It does wonders, so if you need something new that we don't have, find it at \
https://developer.mozilla.org/en-US/docs/Web/JavaScript and search for new things!"
                } ],
                color: 777777,
                icon_url: client.user.avatarURL,
                picture: client.user.avatarURL,
            }
        })
    }
};