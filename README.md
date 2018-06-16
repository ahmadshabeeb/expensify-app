#Getting Started:
1. Create a public folder 
2. Inside the public folder, we should have the index.html
3. Install a development web server, live server by running running the command:
    npm install -g live-server

5. To serve up our application, we should run the command:
    live server public

6. Install Babel so you can use JSX, run the command:
    npm install -g babel-cli@6.24.1

7. Install presets react and env
    yarn init, sets up our project to use yarn that will allow us
    to specify the local dependencies.
    yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

8. At the root of the project create a folder src,  and then a file app.js
    in this app.js we will have our code with the JSX
    then on the cmd run the following command:
    babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
    now everytime we change our app.js in src aoutmatically will use babel to compile
    JSX to the right format.   

9. To add autocompletion for JSX opening tags, go to prefrences, setting 
    and add these lines:
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
      },
      "emmet.triggerExpansionOnTab": true

10. s

#ES6 notes
- var can be redefined and reassigned
- let cannot be redefined but can be reassigned
- const cannot be redefined and cannot be reassigned

- var is funcation scoped but not block scoped
- let and const are both fucntion and block scoped

####NOTE: never use var

- With arrow functions we have no access to the arguments inisde of a function
- With arrow functions we have no priblem with binding 'this' keyword in nested functions
- Arrow functions do not bind its own 'this' value, so this is why we better not use them to define
    object methods
- map fucntion is exetremely powerful function, it takes a function(preferably arrow function) as an argument
    map function return a new array, it does not affect the original array and it allows to manipulate data inside the function

- JSX has no databinding 

- Methods inside of a component cannot access the 'this'.
    any method will be invoked and may use 'this' must bind 'this', ex:
        this.handelAddOption.bind(this)