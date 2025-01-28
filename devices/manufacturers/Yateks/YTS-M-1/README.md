# YTS-M-1


![artigo](https://yateks.com/wp-content/uploads/2018/08/%E5%BE%AE%E6%B0%B4.jpg)

Contador de partículas.

Código do artigo: YTS-M-1

[Website Yateks](https://yateks.com/product/micro-moisture-oil-sensor/)


## Ligação Elétrica

Keeper........YTS-M-1 <br/>
A   <-----------> white (A) <br/>
B   <-----------> green (B) <br/>


<br/>


<br/>

## Método de leitura
Possui uma peculariedade de leitura, as requisições devem obrigatoriamente partir do endereço de registrador 0, não podemos ler um registro único do meio da tabela.
Não é necessário deslocar os endereços. Sem necessidade de alterar formato de leitura.
- Deslocamento de registradores: `0`;
- Byte-swap: `não`;
- Word-swap: `não`;
- DoubleWord-swap: `não`.