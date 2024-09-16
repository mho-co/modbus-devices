# ACS380

![artigo](https://cdn.productimages.abb.com/9IBA038796_400x400.jpg)

### NÃO TESTADO!

Driver/Inversor ABB ACS355

[Website ABB](https://new.abb.com/drives/pt/drives-de-maquinario/acs355)

**Necessário módulo modbus adicional (FMBA-01).**

Pontos importantes do manual de firmware:
- Lista de parâmetros na página 195;
- Configuração da porta na página 345;
- Endereços Modbus disponíveis, a partir da página 345;
- Os endereços podem ser lidos pelos endereços dos paramêtros utilizando a função 03, a maioria dos registros são 16 bits.

## Ligação Elétrica

Keeper........ABB <br/>
A <-----------> 2 / B+ <br/>
B <-----------> 3 / A- <br/>
(-) <-----------> 4 / GND_B

<br/>

## Método de comunicação
Necessário deslocar um endereço para baixo (-1) (PLC base 1). Sem necessidade de alterar formato de leitura.
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.