const axios = require("axios")
axios.get('https://adventofcode.com/2018/day/5/input', 
{
    headers: {
        Cookie: "_ga=GA1.2.1125168595.1543853367; _gid=GA1.2.627092863.1544100854; session=53616c7465645f5fac1192d153220fe7b36c93d74957ad27593f92688fbb4715f51e859c45e6af82c27f0ee9d75f7a34; _gat=1"
    }
})
    .then((data) =>{
        let input = data.data;
        const regex = /(\w)(\1)/ig;
        while(input.match(regex).find((a) => { return a[0] != a[1]}) != undefined){
            const resultat = input.match(regex);
            const group = resultat.find((a) => { return a[0] != a[1]});
            input = input.replace(group, '');
        }
        console.log(input, " => length "+input.length);
    })
