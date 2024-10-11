# VLT AQUA Drive FC 202

![artigo](https://www.danfoss.com/media/7728/vlt_lvd_aqu_adrive_fc202.jpg?anchor=center&mode=crop&width=1050)

Inversor de frequência VLT FC 202

[Website Danfoss](https://www.danfoss.com/pt-br/products/dds/low-voltage-drives/vlt-drives/vlt-aqua-drive-fc-202/)


- Página 18 do manual Modbus descreve os parametros de leitura e controle e também os parâmetros relacionados a porta Modbus;
- Para controle podemos utilizar o modo remoto, ativando.


Para leitura e controle de velocidade definimos o parâmetro 3-00 para 1, com isso temos:
- A leitura de velocidade é definida como -100% a 100% em uma word de 16 bits, int. No caso 16384 representa 100%.

## Controle
8-01 - 2
8-02 - 1
8-04 - 0
3-00 - 1

8-30 - 2
8-31 - 1
8-32 - 2
8-33 - 0


## Parametros de limites max e min de velocidade
4-11 a 14


## Exemplo de Aplicação
*Modo hand - como local*
Nesse modo o operador define via IHM a velocidade e realiza o start e parada manualmente.
Obs: Esse modo também recebe comandos de parada e de reset via serial.

*Modo Auto - como remoto*
Nesse modo o operador define via MHO Cloud a velocidade.


3-13: 0 Hand/Auto

Para ajustar a velocidade manualmente basta: 
3-19 - Ajuste de velocidade JOG em RPM



Verificação dos dados escritos via modbus
16-00 e 01

Parametros gerais para leitura
16-14 corrente
16-17 rpm

8-01 - 0

vivo

## Ligação Elétrica
ok
Keeper........Danfoss <br/>
A <-----------> 68 P RS485 <br/>
B <-----------> 69 N RS485 <br/>
(-) <-----------> 61 COM

<br/>

## Método de comunicação
é necessário deslocar os endereços. Sem necessidade de alterar formato de leitura.
bo -1
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.