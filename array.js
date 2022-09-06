const data = [1,2,3,4,5,6,7,8,9,10]

function pares(){
    return data.filter(i => i%2==0);
}


module.exports = {
    pares
}


