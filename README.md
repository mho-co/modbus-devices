# modbusrtu-devices
Repositório com documentação e arquivos padronizados para leitura de arquivos modbus. Também disponibilizado um exemplo de configuração com o Keeper, bem como as configurações adicionais necessárias para funcionamento.


- Energy meters
- Flow meters
- Drivers



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
