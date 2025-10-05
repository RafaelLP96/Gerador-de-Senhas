
import { generate, shuffle } from "./assistant.js";

export function gerarSenha(_uc, _lc, _nq, _sq, _total, _mode) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let special = "!@#$%¨&*()_+=[]{};.,çÇ";
  let password = "";
  let colet = [[], [], [], []];
  let main = [[], [], [], []];
  let incress = "";

  const filler = (_key) =>{ ///Test to check if the string have more than one the same character
    
    do {
      ///Catch one character on the string var to test with regex
      var get= _key.charAt(Math.floor(Math.random() * _key.length));
      let regex = new RegExp(get, "g");

      //Check if is valid (if this character is not already in the string)
      var valid = regex.test(incress) ? false : true;
      //if false (if is already in string), wlll try with another charecter
    } while (valid == false);

    incress+=get;
    return get;
  }
  
  const special_filler = (_key) => {
    let count=0;
      //Regex have trouble to test symbols, lets make a alternative solution
    do{
      var get= _key.charAt(Math.floor(Math.random() * _key.length)); //get a random character

      //Check if the random character exists in incress string
      var valid = incress.includes(get); ///if exists, return true
      if (valid){

        count++
        if (count>100) ///Ant-freeze
          return "fail";
      }
    }while (valid);

    //If the character pass in the test, add in the string
    incress+=get;

    return get;
  }




  if (_mode){ //if toggle is enabled, distribute the total value to each types

    let _distr = [0,0,0,0];
    let _count = 0;
    for (var _z = 0; _z < _total; _z++){
      _distr[_count]+=1;
      _count++;
      if (_count>3)   _count = 0;
    }
    _uc = _distr[0];
    _lc = _distr[1];
    _nq = _distr[2];
    _sq = _distr[3];
    _total = document.querySelector("#total").value;
  }


  for (let i = 0; i < _lc; i++) 
    colet[0].push(filler(lower));
  
  incress = "";
  for (let i = 0; i < _uc; i++) 
    colet[1].push(filler(upper));
    
  incress = "";
  for (let i = 0; i < _nq; i++)
    colet[2].push(filler(num));

  incress = "";
  for (let i = 0; i < _sq; i++) 
    colet[3].push(special_filler(special));

  
  if (_mode == false){ //if toggle mode is disabled

    //built without toggle system
    colet=colet.flat();
    shuffle(colet);
    password = colet.join("");
    return password;

  }else{

      //in this case, use the toggle method
      generate(main,_total);
      main = main.flat().flat();
    
      for (let ii = 0; ii < _total; ++ii) {
        let get_type = main.shift();
        
        if (colet[get_type].length !== 0){
          
          password += colet[get_type].shift();
        }
      }
      
      return password;
    }
}
