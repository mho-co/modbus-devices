//copyright MHO LTDA: 
version(1);//25/09/2024

let loop = function() {
  let temp = Math.range(0, 1650, -40, 125, mbc.MI(1));
  let hum = mbc.MI(2)/10;
  log(temp);
  log(hum);
  delay(1000);
};