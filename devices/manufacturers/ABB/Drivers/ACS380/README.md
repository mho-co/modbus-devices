# ACS380

![artigo](https://cdn.productimages.abb.com/9PAA00000023915_400x400.jpg)

Driver/Inversor ABB ACS380

[Website ABB](https://new.abb.com/drives/pt/baixa-tensao-ac/fabricantes-de-maquinas/acs380)

Pontos importantes do manual de firmware:
- Lista de parâmetros na página 130;
- Configuração da porta na página 555;
- Endereços Modbus disponíveis, a partir da página 555;
- Os endereços podem ser lidos pelos endereços dos paramêtros utilizando a função 03, a maioria dos registros são 16 bits.

## Ligação Elétrica

Keeper........ABB <br/>
A <-----------> B+ <br/>
B <-----------> A- <br/>
(-) <-----------> BGND

<br/>

## Método de comunicação
Necessário deslocar um endereço para baixo (bo: -1) (Modbus poll: PLC base 1). Sem necessidade de alterar formato de leitura.
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.