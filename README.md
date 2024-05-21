# modbusrtu-devices
Repositório com documentação e arquivos padronizados para leitura de arquivos modbus em equipamentos comerciais de diversos fabricantes. O objetivo deste repositório é centralizar manuais de modbus e resumir os parâmetros de comunicação necessários para estabelecer a comunicação. 

Os parâmetros de comunicação (endereços e formato dos dados) são baseados na documentação do (modbus.org)[https://modbus.org] e definidos como sendo normal quando os dados estão dispostos no formato big-endian e começam no endereço 0. As definições são as mesmas interpretadas pelo software modbus poll por exemplo. 

<bold>Equipamentos listados:</bold>
- Medidores de energia;
- Medidores de vazão;
- Inversores de frequência.

<br>

## Linha MHO Keeper

### Ligações Fisicas
- A: Positivo da comunicação, deve ser conectado com os outros positivos da rede;
- B: Negativo da comunicação, deve ser conectado com os outros negativos da rede;
- (-): Referência da comunicação, no Keeper este é o próprio negativo da fonte que alimenta o equipamento. Deve estar conectado com as outras referências dos outros equipamentos da rede.

### Modo Client
Quando o Keeper opera no modo client (master na antiga nomenclatura) ele irá interpretar os registros da seguinte forma:

- base 0. Os endereços são interpretados como início em 0. Esse é o valor que será escrito na mensagem de requisição Modbus;
- Dados no modo big-endian, para ativar o modo litle-endian basta configurar word-swap. Caso precise, também estão disponíveis byte-swap e doubleword-swap.


### Modo Server
Quando o Keeper opera no modo server (slave na antiga nomenclatura), o client que está requisitando os dados deverá interpretar os registros da seguinte forma:

- base 0. Os endereços são interpretados como início em 0. Esse é o valor que será escrito na mensagem de requisição Modbus;
- Dados no modo big-endian, para ativar o modo litle-endian basta configurar word-swap. Caso precise, também estão disponíveis byte-swap e doubleword-swap.