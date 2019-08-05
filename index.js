const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res){
    res.send('hello world')
})

app.listen(port,function(){
    console.log('listenimg to port 3000')
})




require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testparaqum@gmail.com' , // TODO: your gmail account
        pass: 'good luck1993!' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'testparaqum@gmail.com', // TODO: email sender
    to: 'anushcs55@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    attachments: [{
        filename: 'file.pdf',
        path: '/home/anush/Downloads/Detailed Usage Report - Sources (12).pdf',
        contentType: 'application/pdf'
      }],
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log(err);
    }
    return log('Email sent!!!');
});