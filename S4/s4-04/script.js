// function somarDoisValores (a , b){
//     return a + b
// }
// console.log(somarDoisValores(15, 876))

// function teste (a,b){
//     return typeof(a>b)
// } 
// let result = teste (4,2)
// console.log(result);

function somarNotas (nota1, nota2, nota3, nota4){
   if (typeof nota1 === 'number' && typeof nota2 === 'number' && typeof nota3 === 'number' && typeof nota4 === 'number'){
    return nota1 + nota2 + nota3 + nota4
    } else{
    return 'O campo só pode receber números'
    }
}
console.log(somarNotas(8, 6, '9', 3))
