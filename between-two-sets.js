// Link para o desafio
// https://www.hackerrank.com/challenges/between-two-sets/

//Solução

function getTotalX(a, b) {
    const largestNumber = Math.max(...b)
    
    const multiplicationArray = []
    
    a.forEach(value => {
        let counter = 0;
        while(counter < largestNumber) {
            counter += value
            multiplicationArray.push(counter)
        }
    })
    
     const divionsArray = []
     
     b.forEach(value => {
         for(var i = value; i > 0; i--) {
             if(value % i === 0) {
                 divionsArray.push(i)
             }
         }
     })
     
     const allNumbers = [...multiplicationArray, ...divionsArray]
     
     const obj = {}
     allNumbers.forEach(value => {
         obj[value] = (obj[value] || 0) + 1
     })
     
     let counter = 0;
     Object.keys(obj).forEach(key => {
         if(obj[key] === (a.length + b.length)) {
             counter++
         }
     })
     
     return counter
    
}
