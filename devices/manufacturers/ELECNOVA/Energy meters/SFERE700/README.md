# DDS1946-1P


![artigo](https://www.sfere-elec.net/web/upload/2019/11/15/15737869479166kv7dj.jpg)

Multimedidor de energia Elecnova.

Código do artigo: SFERE700 M21

[Website Elecnova](https://www.sfere-elec.net/product/Sfere700-multi-circuit-monitoring-system-62.html)

## Ligação Elétrica

Keeper........SFERE700 <br/>
A <-----------> A <br/>
B <-----------> B

<br/>


## Configurações Extras
Para alterar as configurações de rede é necessário alterar via software modbus, como por exemplo modbus poll. As configurações de rede padrão de fábrica são:
Endereço: 2
Baud rate: 9600
Data bits: 8
Paridade: N
Stop bits: 1


<br/>

## Método de leitura
Não é necessário deslocar os endereços. Sem necessidade de alterar formato de leitura.
- Deslocamento de registradores: `0`;
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.