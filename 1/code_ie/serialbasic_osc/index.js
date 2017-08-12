var com = require("serialport");

//set up a OSC object to emit on port 6448
var OscEmitter = require('osc-emitter'),
    emitter = new OscEmitter();
emitter.add('localhost', 6448);

//set up a serial port object
var serialPort = new com.SerialPort("/dev/tty.usbmodem3013421", {
    baudrate: 9600,
    parser: com.parsers.readline('\r\n')
});

//console log when serial port is opened
serialPort.on('open', function() {
    console.log('Port open');
});

//Split dat from serial port on comma and transmit as OSC
serialPort.on('data', function(data) {
    var res = data.split(",");
    emitter.emit('/wek/inputs', parseFloat(res[0]), parseFloat(res[1]), parseFloat(res[2]));
    console.log(data);
});