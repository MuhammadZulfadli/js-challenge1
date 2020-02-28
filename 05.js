let angka = [];
for  (let i=0; i<=1000; i++){
  angka.push(i);
}

let angkaGanjil = [];
let angkaGenap = [];
let kelipatanlima = [];

function OddEven(){
  for (i=0; i<angka.length; i++){
      if (angka[i] % 2 === 0){
      angkaGenap.push(angka[i]);
    }   else {
      angkaGanjil.push(angka[i]);
    }
  }
};

function multiplylima(){
  for (i=0; i<angka.length; i++){
    if (angka[i] % 5 === 0){
      kelipatanlima.push(angka[i]);
    }
  }
};



OddEven();
multiplylima();


console.log(`bilangan Ganjil : ${angkaGanjil}`);
console.log(`bilangan Genap : ${angkaGenap}`);
console.log(`Kelipatan lima : ${kelipatanlima}`);
