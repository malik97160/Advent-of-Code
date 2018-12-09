const axios = require('axios')

axios.get('https://adventofcode.com/2018/day/2/input', 
{
    headers: {
        Cookie: "_ga=GA1.2.1125168595.1543853367; _gid=GA1.2.627092863.1544100854; session=53616c7465645f5fac1192d153220fe7b36c93d74957ad27593f92688fbb4715f51e859c45e6af82c27f0ee9d75f7a34; _gat=1"
    }
})
    .then((data) =>{
        let array = data.data.split('\n');
        let two = 0;
        let three = 0;
        for(let word of array){
            let twoFlag = false;
            let threeFlag = false;
            while(word.length > 0){
                let character = word[word.length -1];
                let res = CountCharactere(word, word.length -1, character);
                if(res === 2 && !twoFlag){
                    console.log(character+" => "+res);
                    twoFlag = true;
                    two++;
                } else if(res === 3 && !threeFlag){
                    console.log(character+" => "+res);
                    threeFlag = true;
                    three++;
                }
                word = word.replace(new RegExp(character, 'g'), '');
            }
        }
        console.log(two +" * "+three+" = "+two*three);
    })
    .catch((error) =>{
        console.log(error);
});

function CountCharactere(word, i, car){
    if (i < 0)
        return 0;
    let tmp = 0;
    if (word[i] == car)
        tmp = 1;
    return tmp + CountCharactere(word, i-1, car);
}
