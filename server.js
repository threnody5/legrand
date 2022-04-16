let express = require('express');
let bodyParser = require('body-parser');

// New
let fs = require('fs');

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post('/api/data', function (request, response) {
    let postBody = request.body;

    if (postBody.op === "Add") {
        // let data = {};
        stringJSON = JSON.stringify(postBody);
        console.log(postBody);


        // if (fs.existsSync(/* path and file name */)) {
        // } else {
        //     fs.writeFile(/* path and file name */, stringJSON, function (err) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //         }
        //     })
        // }

        // insertData(data, response);
        // console.log("Added user data" + postBody);
    }
    else if (postBody.op === "Find") {
        selectData(postBody.cusID, response);

    }
    else if (postBody.op === "Update") {
        let data = {};
        data.cusId = postBody.cusID;
        data.firstName = postBody.fName;
        data.lastName = postBody.lName;
        data.address = postBody.address;
        data.city = postBody.city;
        data.province = postBody.province;
        data.postal = postBody.postalCode;
        updateData(data, response);
        console.log("Updated user data" + data);

    }
    else if (postBody.op === "Delete") {
        deleteData(postBody.cusID, response);
    }
});

let port = process.env.PORT || 3000;

let server = app.listen(port, function () {
    console.log('Server is running on port' + port);
});