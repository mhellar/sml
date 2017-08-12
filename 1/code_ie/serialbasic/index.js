var com = require("serialport");

var serialPort = new com.SerialPort("/dev/tty.usbmodem3228731", {
    baudrate: 9600,
    parser: com.parsers.readline('\r\n')
});

serialPort.on('open', function() {
    console.log('Port open');
});

//Split dat from serial port on comma and transmit as OSC
serialPort.on('data', function(data) {
    console.log(data);
});