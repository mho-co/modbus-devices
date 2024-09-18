# ACS380

![artigo](https://static.wixstatic.com/media/fd4f87_d2283570508f4f37a8442a061fa8d73f~mv2.jpg/v1/fill/w_526,h_528,al_c,lg_1,q_80,enc_auto/California%20Bus.jpg)

Medidor de vazão

[Website Incontrol](https://www.incontrol.ind.br/medidordevazao/medidor-de-vaz%C3%A3o-eletromagn%C3%A9tico---tipo-inser%C3%A7%C3%A3o-%E2%80%93-modelo-vmi)


Porta padrão: 8N2 9600
Registros na pagina 23 do manual.

## Ligação Elétrica

Keeper........Incomag <br/>
A <-----------> D+ <br/>
B <-----------> D- <br/>
(-) <-----------> (-) 24 Vcc

<br/>

## Método de comunicação
Necessário deslocar um endereço para baixo (bo: -1) (Modbus poll: PLC base 1). Sem necessidade de alterar formato de leitura.
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.