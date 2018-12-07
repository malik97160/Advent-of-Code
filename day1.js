const axios = require('axios')

axios.get('https://adventofcode.com/2018/day/1/input', 
{
    headers: {
        Cookie: "_ga=GA1.2.1125168595.1543853367; _gid=GA1.2.627092863.1544100854; session=53616c7465645f5fac1192d153220fe7b36c93d74957ad27593f92688fbb4715f51e859c45e6af82c27f0ee9d75f7a34; _gat=1"
    }
})
    .then((data) =>{
        var sum = data.data.split('\n').map((item) => !isNaN(parseInt(item, 10)) ? parseInt(item, 10) : 0).reduce((a, b) => a + b, 0);
        console.log(sum+" "+typeof(sum));
    })
    .catch((error) =>{
        console.log(error);
    });