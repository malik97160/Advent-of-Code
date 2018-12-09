const axios = require('axios')

axios.get('https://adventofcode.com/2018/day/2/input', 
{
    headers: {
        Cookie: "_ga=GA1.2.1125168595.1543853367; _gid=GA1.2.627092863.1544100854; session=53616c7465645f5fac1192d153220fe7b36c93d74957ad27593f92688fbb4715f51e859c45e6af82c27f0ee9d75f7a34; _gat=1"
    }
})
    .then((data) =>{
        let array = data.data.split('\n');
        for(let word of array){
            for (let crtWord of array){
                if(word != crtWord){
                   let res =  Xor(word, crtWord);
                   if(res === 1)
                    console.log(word +" => "+crtWord)
                }
            }
        }
    })
    .catch((error) =>{
        console.log(error);
});

function Xor(a, b){
    let xor = 0;
    for(i=0; i< a.length; i++){
        if(a[i] !== b[i])
            xor+=1;
    }
    return xor;
}

function CountCharactere(word, i, car){
    if (i < 0)
        return 0;
    let tmp = 0;
    if (word[i] == car)
        tmp = 1;
    return tmp + CountCharactere(word, i-1, car);
}
