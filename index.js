const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
    res.send('hello world')
})

app.listen(port, function () {
    console.log('listenimg to port 3000')
})




require('dotenv').config();

const nodemailer = require('nodemailer');
const xoauth2=require('xoauth2');

function pdfSender() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          //  xoauth2:xoauth2.createXOAuth2Generator({
                type: "OAuth2",
                user:'testparaqum@gmail.com',
                clientId:'663512890790-f1gqfkodg3nqdftrsrjugf8k1ko7tpil.apps.googleusercontent.com',
                clientSecret:'WtsnVZrQ-yUelo3QjRUL3lk6',
                refreshToken:'1/KISxhwD1xZrzYUHETNT_WUhbMKVwWrY6ayEeb9kvtNk'
//})
           // user: 'testparaqum@gmail.com', // TODO: your gmail account
         
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
            path: '/home/anush/Downloads/download (2).pdf',
            contentType: 'application/pdf'
        }],
    };

    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {

        if (err) {
            return console.log(err);
        }

        // var visitDate = new Date (tempDate.getUTCFullYear(), tempDate.getUTCMonth(), tempDate.getUTCDate());
        
        return console.log('Email sent!!!');
    });
}

setInterval(sendPDF,30000);

var tempDate = new Date();
var day = tempDate.getFullYear() + '.' + tempDate.getMonth() + '.' + tempDate.getDate()+'.'+tempDate.getHours()+'.'+tempDate.getMinutes()
function sendPDF() {
    console.log(day)
    var curDate = new Date();
    var cur_day = curDate.getFullYear() + '.' + curDate.getMonth() + '.' + curDate.getDate()+'.'+curDate.getHours()+'.'+curDate.getMinutes()
    console.log(cur_day)
    if (day !== cur_day) {
        day = cur_day;
        pdfSender();
    }
}