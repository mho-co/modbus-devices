# Modbus Devices

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/mho-co/modbus-devices/README.md)

Repositório com documentação e arquivos padronizados para leitura de arquivos modbus em equipamentos comerciais de diversos fabricantes. O objetivo deste repositório é centralizar manuais de modbus e resumir os parâmetros de comunicação necessários para estabelecer a comunicação. 

Os parâmetros de comunicação (endereços e formato dos dados) são baseados na documentação do [modbus.org](https://modbus.org) e definidos como sendo normal quando os dados estão dispostos no formato big-endian e começam no endereço 0. As definições são as mesmas interpretadas pelo software modbus poll por exemplo. 

Equipamentos listados:
- Medidores de energia;
- Medidores de vazão;
- Inversores de frequência.

<br>

<br>

## Linha MHO Keeper
Para maiores informações consultar base de conhecimento [docs.mhoeng.com](https://docs.mhoeng.com/docs/2keeper/config_adv/config_modbus_rtu/ligacoes)
### Ligações Fisicas
- A: Positivo da comunicação, deve ser conectado com os outros positivos da rede;
- B: Negativo da comunicação, deve ser conectado com os outros negativos da rede;
- (-): Referência da comunicação, no Keeper este é o próprio negativo da fonte que alimenta o equipamento. Deve estar conectado com as outras referências dos outros equipamentos da rede.

<br>

### Modo Client
Quando o Keeper opera no modo client (master na antiga nomenclatura) ele irá interpretar os registros da seguinte forma:

- base 0. Os endereços são interpretados como início em 0. Esse é o valor que será escrito na mensagem de requisição Modbus;
- Dados no modo big-endian, para ativar o modo litle-endian basta configurar word-swap. Caso precise, também estão disponíveis byte-swap e doubleword-swap.

<br>

### Modo Server
Quando o Keeper opera no modo server (slave na antiga nomenclatura), o client que está requisitando os dados deverá interpretar os registros da seguinte forma:

- base 0. Os endereços são interpretados como início em 0. Esse é o valor que será escrito na mensagem de requisição Modbus;
- Dados no modo big-endian, para ativar o modo litle-endian basta configurar word-swap. Caso precise, também estão disponíveis byte-swap e doubleword-swap.