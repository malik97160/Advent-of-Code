const axios = require('axios')
axios.get('https://adventofcode.com/2018/day/4/input', 
{
    headers: {
        Cookie: "_ga=GA1.2.1125168595.1543853367; _gid=GA1.2.627092863.1544100854; session=53616c7465645f5fac1192d153220fe7b36c93d74957ad27593f92688fbb4715f51e859c45e6af82c27f0ee9d75f7a34; _gat=1"
    }
})
    .then((data) =>{
        let array = data.data.split('\n');
        let guardNumber = 0;
        res = array.map((a) =>{
            if(a !== undefined && a!= ''){
                let dates = a.match(/\d+/g);
                if(dates != undefined && dates.length > 5)
                    guardNumber = dates[5];
                if (dates !== undefined){
                    let date = new Date(dates[0], dates[1]-1, dates[2], dates[3], dates[4]);
                    return new Array(date, guardNumber);
                }
            }
        });
    })
    .catch((error) =>{
        console.log(error);
});
