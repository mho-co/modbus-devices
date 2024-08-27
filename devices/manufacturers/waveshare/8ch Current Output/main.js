//copyright MHO LTDA: 
version(1);

let loop = function() {
  mbc.wMI(1,20000); //seta corrente do canal 1 para 20mA, pois esta na wMI1 de acordo com configuracoes do mbclient.json
  delay(1000);
};