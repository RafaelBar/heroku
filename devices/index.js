const Location = {
    HALL: 'Hall',
    LIVINGROOM: 'LivingRoom',
    BATHROOM: 'Bathroom',
    KITCHEN: 'Kitchen'
}

const DeviceType = {
    DOORSWITCH: 'DoorSwitch', 
    MOTIONDETECTOR: 'MotionDetector', 
    PLUG: 'Plug', 
    SMOKEDETECTOR: 'SmokeDetector',
    THERMOSTAT: 'Thermostat', 
    CAMERA: 'Camera'
}

var data = '[' +
'{ "Id":"1" , "Name":"Door Switch" , "Location":"" , "Status":true, "Battery": 20, "DeviceType":"", "LastSuccessfulConnection": "" },' +
'{ "Id":"2" , "Name":"Motion Detector" , "Location":"" , "Status":false, "Battery": 50, "DeviceType":"", "LastSuccessfulConnection": "" },' +
'{ "Id":"100" , "Name":"Camera" , "Location":"" , "Status":false, "Battery": 50, "DeviceType":"", "LastSuccessfulConnection": "" },' +
'{ "Id":"3" , "Name":"Plug" , "Location":"" , "Status":true, "Battery": 100, "DeviceType":"", "LastSuccessfulConnection": "" },'+
'{ "Id":"50" , "Name":"Plug" , "Location":"" , "Status":true, "Battery": 100, "DeviceType":"", "LastSuccessfulConnection": "" },'+
'{ "Id":"4" , "Name":"Camera" , "Location":"" , "Status":false, "Battery": 90, "DeviceType":"", "LastSuccessfulConnection": "" }]';

var devices = '[' +
'{ "Id":"1" , "DeviceType":"DoorSwitch" },' +
'{ "Id":"2" , "DeviceType":"MotionDetector" },' +
'{ "Id":"100" , "DeviceType":"Camera" },' +
'{ "Id":"3" , "DeviceType":"Plug" },'+
'{ "Id":"50" , "DeviceType":"Plug" },'+
'{ "Id":"57" , "DeviceType":"Plug" },'+
'{ "Id":"60" , "DeviceType":"SmokeDetector" },'+
'{ "Id":"30" , "DeviceType":"Thermostat" },'+
'{ "Id":"20" , "DeviceType":"Thermostat" },'+
'{ "Id":"4" , "DeviceType":"Camera" }]';


var obj = JSON.parse(data); 
var obj2 = JSON.parse(devices);     
obj[0].Location = Location.HALL;
obj[1].Location = Location.LIVINGROOM;
obj[2].Location = Location.BATHROOM;
obj[3].Location = Location.KITCHEN;
obj[4].Location = Location.KITCHEN;
obj[5].Location = Location.KITCHEN;
obj[0].DeviceType = DeviceType.DOORSWITCH;
obj[1].DeviceType = DeviceType.MOTIONDETECTOR;
obj[2].DeviceType = DeviceType.CAMERA;
obj[3].DeviceType = DeviceType.PLUG; 
obj[4].DeviceType = DeviceType.PLUG; 
obj[5].DeviceType = DeviceType.CAMERA; 
obj[0].LastSuccessfulConnection = new Date('August 19, 1975 23:15:30'); 
obj[1].LastSuccessfulConnection = new Date('August 30, 2010 22:15:30'); 
obj[2].LastSuccessfulConnection = new Date('August 02, 2019 23:14:30'); 
obj[3].LastSuccessfulConnection = new Date('August 07, 1990 23:15:37'); 
obj[4].LastSuccessfulConnection = new Date('August 07, 1990 23:15:37'); 
obj[5].LastSuccessfulConnection = new Date('August 07, 1990 23:15:37'); 							

exports.getDevices = function()  {    						//get all devices
    return obj;
};

exports.getDeviceTypeById = function(Id)  { 
    for (i in obj){
      if(obj[i].Id == Id){
          return 1;
      }
    } 						// get device by id
    for (i in obj2){
      if(obj2[i].Id == Id){
          return obj2[i].DeviceType;
      }
    }
    return 2;
};
