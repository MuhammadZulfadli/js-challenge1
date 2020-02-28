class str {
    constructor(wordlower, wordupper, capital, balik, countchar, countword, randomword){
        this.wordlower = wordlower
        this.wordupper = wordupper
        this.capital = capital
        this.balik = balik
        this.countchar = countchar
        this.countword = countword
        this.randomword = randomword
    }
    static lower(wordlower){
        console.log(wordlower.toLowerCase())
    }
    static upper(wordupper){
        console.log(wordupper.toUpperCase())
    }
    static capitalize(capital){
        let capitallstring = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase()
        let words = capital.split(' ').map(capitallstring)
        const fix = words.join(' ')
        console.log(fix)
    }
    static reverse(balik){
        let splitstring = balik.split("")
        let balikarray = splitstring.reverse("")
        let joinarray = balikarray.join("")
        console.log(joinarray)
    } 
    static random(randomword){
        var result = '';
        var character = 'ABCDEFGHIJKLMNOPQRSTUBWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        var characterLength = character.length
            if (randomword === undefined){
                for(var i=0; i< 16; i++){
                    result += character.charAt(Math.floor(Math.random() * characterLength));
                }
                console.log(result)
            } else {
                for (var i=0; i < randomword; i++){
                    result += character.charAt(Math.floor(Math.random() * characterLength));
                }
                console.log(result);
            }
    }
    static count(countchar){
        console.log(countchar.length)
    }
    static countWords(countword){
        console.log(countword.split(' ').length)
    }
}

str.lower('MAKAN')
str.upper('malam')
str.capitalize('saya ingin makan')
str.reverse('rusak')
str.count('lorem ipsum')
str.countWords('lorem ipsum')
str.random()
str.random(6)
str.random(32)