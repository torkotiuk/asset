# GIT learning page

https://www.atlassian.com/ru/git/tutorials/setting-up-a-repository

File systems/console command:

1. create file ---> touch file.txt
2. show files in current folder ---> ls (check what terminal use)
3. show with hide files ---> ls -a
4. clear console ---> clear
5. go to upper folder ---> cd ..
6. create folder ---> mkdir
7. delete file (type first letter & tab for autocomplete) ---> rm file.txt
8. delete folder ---> rm -rf folderName
9. Where am I? ---> pwd

Thunder Client (extension for VSCode, change Postman)

Material Icon Theme (extension for VSCode)

Using Debugger of VSCode:

- Settings\type "AutoAttach" & in JavaScript: Auto Attach Filter choose
  "OnlyWithFlag"
- in console type ---> node --inspect app.js

# ======================================================================

# ======================================================================

# ======================================================================

# ======== Connection to MongoDB via mongoose (Very IMPORTANT): ========

===== First option is MISUNDERSTANDABLE, but works: =====

1. It is possibly to create connection in separate folder

# Example A. f.e. db\connection.js

# const mongoose = require('mongoose');

# require('dotenv').config();

# const { DB_HOST } = process.env;

# const db = mongoose.connect(DB_HOST, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, });

# module.exports = db;

next step really misunderstanding is import this var "db" to file with model

# const { Schema, model } = require('mongoose');

# -----> const db = require('../db/connection'); <-----

# const contactsSchema = Schema({name:{type: String}});

# const Contact = model('contact', contactsSchema);

# module.exports = Contact;

2. or import this connection to app.js like

# require('../db/connection');

# ======================================================================

===== Second option (is clear enough): ===== 2. In app.js

# a) import

# const mongoose = require('mongoose');

# require('dotenv').config();

# const { DB_HOST } = process.env;

b) after all middlware-s

# mongoose.connect(DB_HOST, { useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology: true, }).then(() => { console.log('Database connect');}).catch(err => console.log(err));

# ======================================================================

# ======================================================================

# ======================================================================
