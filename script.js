var name = prompt('iserisci una parola');


function isPalindroma(string){
  var reverse = "";
  for(i = string.length - 1 ; i >= 0 ; i-- ){
    reverse+=name[i]
  }
  if (string === reverse){
    return "is palidromo"
  }else{
    return "not palindromo"
  }
}

console.log(isPalindroma(name))
