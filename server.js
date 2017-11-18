/* import config, { nodeEnv, logStars } from "./config"

console.log(config, nodeEnv);
logStars("Hello World!"); */

/* 
HTTPS

import https from "https";

https.get("https://www.lynda.com",res=>{
    // console.log("Response status code: ",res.statusCode);
    res.on("data",chunk=>{
        console.log(chunk.toString());
    });
}); */

/* 
HTTP

import http from "http";
import { setTimeout } from "timers";

const server = http.createServer();
server.listen(8080);

server.on("request",(req,res)=>{
    res.write("Hello HTTP!\n");
    setTimeout(()=>{
        res.write("You are 3 seconds late!\n");
        res.end();
    },3000);
}); */

/* EXPRESS */
import express from "express";
import config from "./config";
// import fs from 'fs';

// create server
const server = express();

server.listen(config.port, ()=>{
    // success handler
    console.info("Express successfully listening to port ",config.port);
});

// Instead of listening to a single request event, an Express server also handles
// server side routing for us.

/*
    @arg first: listen to this routing point
    @arg second: event handler call similar to HTTP module receives both a request
                and a response object.
*/
server.get("/",(req,res)=>{
    res.send("Hello Express!");
});

/* server.get("/about.html",(req,res)=>{
    // @arg first: file to load
    // @arg second: callback with data being file content as a buffer
    fs.readFile("./about.html",(err,data)=>{
        res.send(data.toString());
    });
    // res.send("The about page!");
});*/

// Instead of writing all the chunks for routing events, Express has simple
// static middleware that we can use to automatically serve static assets!
// .use is how put Express middleware stack. And public directory is where we
// want our static assets to be hosted on the file system. Express will take
// care of serving its content to its requester.

server.use(express.static('public'));

/*
@arg first: route prefix
@arg second: api router
*/
server.use('/api',apiRouter);

import apiRouter from "./api";