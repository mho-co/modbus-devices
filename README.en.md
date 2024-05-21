# Modbus Devices

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/mho-co/modbus-devices/blob/master/README.md)

Repository with documentation and standardized files for reading Modbus files from commercial equipment of various manufacturers. The purpose of this repository is to centralize Modbus manuals and summarize the communication parameters needed to establish communication.

The communication parameters (addresses and data format) are based on the documentation from [modbus.org](https://modbus.org) and defined as normal when the data is arranged in big-endian format and starts at address 0. The definitions are the same as those interpreted by Modbus Poll software, for example.

Listed equipment:
- Energy meters;
- Flow meters;
- Frequency inverters.

<br/>
<br/>

## MHO Keeper Line

For more information, consult the knowledge base at docs.mhoeng.com

### Physical Connections
- A: Positive communication line, should be connected with the other positive lines on the network;
- B: Negative communication line, should be connected with the other negative lines on the network;
- (-): Communication reference, on the Keeper this is the negative of the power supply that powers the equipment. It should be connected with the other references of the other equipment on the network.

<br/>

### Client Mode
When the Keeper operates in client mode (master in the old terminology), it will interpret the registers as follows:

- Base 0. Addresses are interpreted as starting at 0. This is the value that will be written in the Modbus request message;
- Data in big-endian mode, to activate little-endian mode just configure word-swap. If needed, byte-swap and doubleword-swap are also available.

<br/>

### Server Mode
When the Keeper operates in server mode (slave in the old terminology), the client requesting the data should interpret the registers as follows:

- Base 0. Addresses are interpreted as starting at 0. This is the start value that should be written in the Modbus request message;
- Data in big-endian mode. If needed, client must read data with byte-swap, word-swap or doubleword-swap.