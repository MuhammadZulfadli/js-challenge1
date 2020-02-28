let song = `Aku ingin begini 
            Aku ingin begitu 
            Ingin ini itu banyak sekali 
            Semua semua semua Dapat dikabulkan 
            Dapat dikabulkan Dengan kantong ajaib 
            Aku ingin terbang bebas Di angkasa 
            Hei… baling baling bambu 
            La... la... la... 
            Aku sayang sekali 
            Doraemon 
            La... la... la... Aku sayang sekali`;
let aku = song.match(/aku/gi);
let ingin = song.match(/ingin/gi);
let dapat = song.match(/dapat/gi);

console.log(`aku : ${aku.length}`);
console.log(`ingin: ${ingin.length}`);
console.log(`dapat: ${dapat.length}`);
