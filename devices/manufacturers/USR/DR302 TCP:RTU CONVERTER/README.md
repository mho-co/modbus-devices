# USR DR302

![artigo](https://www.pusr.com/uploads/20221211/DR302-120221211181607.png)

Conversor serial RS485 para TCP, para utilização em conjunto com produtos Modbus TCP.

[Website USR](https://www.pusr.com/products/din-rail-rs485-serial-to-ethernet-converter-usr-dr302.html)


## Ligação Elétrica

Keeper........USR <br/>
A <-----------> A <br/>
B <-----------> B <br/>
(-) <-----------> G

<br/>

## Configurações
Para funcionar o Modbus TCP, basta configurarmos o conversor da seguinte forma:

Na aba "Serial port"
- Baud rate, data size, parity e stop bits. Configurar conforme definição da rede RS485;
- Caso o Keeper seja mestre, configurar como TCP Client, e definir o IP do server TCP que será requisitado pelo keeper;

Na aba "Expand Function"
- Habilitar Modbus TCP;


