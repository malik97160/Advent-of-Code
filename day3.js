const axios = require('axios')

axios.get('https://adventofcode.com/2018/day/3', 
{
    headers: {
        Cookie: "_ga=GA1.2.1125168595.1543853367; _gid=GA1.2.627092863.1544100854; session=53616c7465645f5fac1192d153220fe7b36c93d74957ad27593f92688fbb4715f51e859c45e6af82c27f0ee9d75f7a34; _gat=1"
    }
})
    .then((data) =>{
        // let array = data.data.split('\n');
        let array = new Array("1", "2");
        let field =  InitializeField(1000);
        for(let claim of array){
            setClaim(claim, field);
        }
        res = findRes(field);
    })
    .catch((error) =>{
        console.log(error);
});

function InitializeField(number){
    let array = new Array(number);
    for (let i = 0 ; i < number; i++){
        array[i] = new Array(number);
    }
    return array;
}

function setClaim(strClaim, field){
    let id = getId(strClaim);
    let left = getLeft(strClaim);
    let top = getTop(strClaim);
    let width = getWidth(strClaim);
    let height = getHeight(strClaim);

    for(let i = 0; i < width; i++){
        for( let j = 0; j < height; j++){
            let tmp = field[left+(i+1)][top +(j+1)];
            if(tmp === undefined)
              tmp = id;
            else
                tmp = 'x';
        }
    }
}

function getId(strClaim){
    if(strClaim === "1")
        return 1;
    else if(strClaim === "2"){
        return 2 ;
    }
}

function getLeft(strClaim){
    if(strClaim === "1")
        return 1;
    else if(strClaim === "2"){
        return 2 ;
    }
}

function getTop(strClaim){
    return 3;
}

function getWidth(strClaim){
    return 4;
}

function getHeight(strClaim){
    return 4;
}

function findRes(array){
    for(let i = 0; i < 1000; i++){
        for(let j = 0; j < 1000; j++){
            if(array[i][j] == 'x'){
                console.log("i => "+i+" j => "+j);
            }
        }
    }
}
