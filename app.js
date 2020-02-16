var express = require('express');
var app = express();
var cors = require('cors');
var url = require('url');
var devices = require('./devices');
/////////////////

app.use(cors({
  credentials: true,
}));

app.get ('/all', function (req, res) {
	res.json(devices.getDevices());
});

app.get ('/id/:deviceid', function (req, res) {
	res.json(devices.getDeviceTypeById(req.params.deviceid));
});

///////////////////
app.listen(process.env.PORT || 3000);
console.log('listen 3000');