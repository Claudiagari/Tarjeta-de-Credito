var input=prompt('¿Cual es el numero de su tarjera?')
function isValidCard(number){
  var numcard =number.toString()
  var array = Array.from(numcard)
    array.reverse()
  for(var i=0;i<=array.length;i++){
    var suma =0
    if(i%2===0){
      if (parseInt(array[i])*2>=10){
        array[i]


      }



    }
  }



return suma
}

console.log(isValidCard(input))
