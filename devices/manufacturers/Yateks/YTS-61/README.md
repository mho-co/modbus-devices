# YTS-61


![artigo](https://yateks.com/wp-content/uploads/2020/09/YTS-61-6in1-Oil-condition-sensor-1.jpg)

Contador de partículas.

Código do artigo: YTS-61

[Website Yateks](https://yateks.com/product/yts61-6-in-1-oil-condition-sensor/)


## Ligação Elétrica

Keeper........YTS-61 <br/>
A   <-----------> RS485+/A <br/>
B   <-----------> RS485-/B <br/>


<br/>


<br/>

## Método de leitura
Possui uma peculariedade de leitura, as requisições devem obrigatoriamente partir do endereço de registrador 0, não podemos ler um registro único do meio da tabela.
Não é necessário deslocar os endereços. Sem necessidade de alterar formato de leitura.
- Deslocamento de registradores: `0`;
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.