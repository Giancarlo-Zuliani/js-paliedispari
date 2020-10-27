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

function run(){
  var userChoice = prompt('pari o dispari')
  if(userChoice == 'pari' || userChoice == 'dispari'){
        var sum = gameset()
        if((userChoice == 'pari' && isEven(sum)) ||(userChoice == 'dispari' && !isEven(sum))){
            console.log('hai vinto');
        }else{
          console.log('hai perso')
        }
      }else{
        run();
      }

}

function gameset(){
  var userNum = prompt('inserisci un numero da 1 a 5');
  if(userNum < 0 || userNum > 5){
    gameset();
}else{
  var cpuNum = Math.floor(Math.random() * 6)
  var sum = cpuNum + userNum;
    return sum;
  }
};


function isEven(x){
  if (x % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}

run();
