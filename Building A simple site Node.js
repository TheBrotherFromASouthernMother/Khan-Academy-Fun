//App.js (Main Program File)

//links to router.js file
const router = require('./router.js');


//1. create a web server

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

//creates an http serve object
const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
 });

//Let's us know that the serve is actuall running when we execute the program on the commandline
server.listen(port, () => {
  console.log(`Server running at http://<workspace-url>/`);
});

-------------------------------------------------------------------------
//Router.js (Handles the rounting within the server)


const Profile = require("./profile.js");
const render = require("./render.js");
const queryString = require("querystring");


// Handle HTTP route GET / and POST // i.e home
function homeRoute(request, response) {
  
  if (request.url === "/") {
    if (request.method === "GET") {
   response.statusCode = 200;
   response.setHeader('Content-Type', 'text/html');
   render.view("header", {}, response);
     render.view("search", {}, response);
     render.view("footer", {}, response);
     
    response.end();
    } else {
     request.on("data", (postBody) => {
      let query = queryString.parse(postBody.toString()); 
       response.writeHead(303, {"Location":  "/" + query.username});
       response.end();
       
     });
      
    }
  }
  
  }


// Handle HTTP route GET /: username i.e. /chalkers
    function userRoute(request, response) { 
    
      let username = request.url.replace("/", "");
      if (username.length > 0) {
       response.statusCode = 200;
   response.setHeader('Content-Type', 'text/html');
    render.view("header", {}, response);
        
        
       const studentProfile = new Profile(username);
        studentProfile.on("end", (profileJSON) => {
                   
          let values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badgeCount: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript,
          
          }
                   
          render.view("profile", values, response);
          render.view("footer", {}, response);
          response.end();
          
          
         }); //profile.end
              
       studentProfile.on("error", (error) => {
                                 
          render.view("error", {errorMessage: error.message}, response);
         render.view("search", {}, response);
          render.view("footer", {}, response);
         response.end();
                         }); 
      
      }
    } //userequest end


module.exports.home = homeRoute;
module.exports.user = userRoute;

---------------------------------------------------------------------------------
//Render.js


// function that handles the reading of files and merge in values
const fs = require('fs');

function MergeValues(values, content) {
    //cycle over the keys
    for (let key in values) {
      //replace all {{key}} with value from the values object
      content = content.replace("{{" +key+ "}}", values[key]);
      
    }
  return content;
  
}


function view(template, values, response) {
  
  //read from  the template files
 let fileContents = fs.readFileSync(`./views/${template}.html`, {encoding: "utf8"});
      
 //insert values in to the content  
     fileContents = MergeValues(values, fileContents);
 
  //write out to the response
    response.write(fileContents);
  


}

module.exports.view = view;


----------------------------------------------------------------------------------------
//Profile.js


var EventEmitter = require("events").EventEmitter;
var https = require("https");
var http = require("http");
var util = require("util");

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */
function Profile(username) {

    EventEmitter.call(this);

    var profileEmitter = this;

    //Connect to the API URL (https://teamtreehouse.com/username.json)
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
        var body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            profileEmitter.emit("error", new Error("There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                }
            }
        }).on("error", function(error){
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Profile, EventEmitter );

module.exports = Profile;


-------------------------------------------------------------------------
Header.html


<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Treehouse Profile</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css" media="screen">
        @import url(http://fonts.googleapis.com/css?family=Varela+Round);
        @import url(http://necolas.github.io/normalize.css/3.0.2/normalize.css);

        body {
            background: #ECEEEF;
            text-align: center;
            margin: 100px auto;
            max-width: 462px;
            padding: 0 40px;
            font: 18px normal 'Varela Round', Helvetica, serif;
            color: #777B7E;
        }

        img {
            width: 100%;
        }

        #searchIcon, #avatar {
            width: 50%;
            border-radius: 50%;
            margin: 0 25% 0 25%;
        }

        input {
            font-family: 'Varela Round', Helvetica, serif;
            font-size: 18px;
            padding: 31px 0;
            margin: 10px 0;
            text-align: center;
            width: 360px;
            border-radius: 4px;
            border: 1px solid #D5DDE4;
            color: #2C3238;
        }

        #username {
            margin: 20px 0 0;
        }

        .button {
            border-color: #5FB6E1;
            background: #5FB6E1;
            color: #fff;
        }

        #error {
            width: 100%;
            padding: 22px 0;
            background: #FFE6B2;
            color: #C5A14E;
            position: absolute;
            left: 0;
            top: 0;
        }

        #profile {
            background: #fff;
            border-radius: 4px;
            border: 1px solid #D5DDE4;
            padding: 40px 0 0;
            margin: -40px 0 0;
        }

        ul {
            list-style-type: none;
            padding: 0;
            margin: 40px 0 0;
        }

        li {
            display: inline-block;
            width: 100%;
            padding: 22px 0;
            margin: 0;
            border-top: 1px solid #D5DDE4;
        }

        a, a:visited {
            color: #5FB6E1;
            text-decoration: none;
        }

        span {
            color: #2C3238;
        }
    </style>
</head>

--------------------------------------------------------------------
//Error.html


<body><div id="error"> {{errorMessage}}</div>


-----------------------------------------------------------------------
//Search.html
<img src="http://i.imgur.com/VKKm0pn.png" alt="Magnifying Glass" id="searchIcon">

<form action="/" method="POST">
    <input type="text" placeholder="Enter a Treehouse username" id="username" name="username">
    <input type="submit" value="submit" class="button">
</form>
---------------------------------------------------------------------------------
//proifle.html

<div id="profile">

    <img src="{{avatarUrl}}" alt="Avatar" id="avatar">

    <p><span>@{{username}}</span></p>

    <ul>
        <li><span>{{badgeCount}}</span> Badges earned</li>
        <li><span>{{javascriptPoints}}</span> JavaScript points</li>
        <li><a href="/">search again</a></li>
    </ul>

</div>
------------------------------------------------------------------------------------
//footer.html

</body>
</html>


