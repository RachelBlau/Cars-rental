// import express from 'express'; ??

const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('hello world')
})

app.listen('8080')
