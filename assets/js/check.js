
//Enable or disable inputs based on checkbox state

export function Checkbox(){

  let check = document.querySelector("#check");
  let inp = document.querySelectorAll(".container1 .inp input");
  let quantity = document.querySelector("#total");

  if (check.checked == true) {
    inp.forEach((element) => {
      element.setAttribute("disabled", "true");
    });
    quantity.removeAttribute("disabled");
  } else {
    inp.forEach((element) => {
      gerar(0);
      element.removeAttribute("disabled");
    });

    quantity.setAttribute("disabled", "true");
  }
}

export function checkInputs()  {  ///check if inputs are valid numbers
  let lowerq = (document.querySelector("#quantitylower")).value;
  let upperq = (document.querySelector("#quantityupper")).value;
  let numberq = (document.querySelector("#quantitynumber")).value;
  let specialq = (document.querySelector("#quantityespecial")).value;
  
  if (!isNaN(lowerq) == true || lowerq < 0) {
    document.querySelector("#quantitylower").value = 5;
    lowerq = 5;
  }

  if (!isNaN(upperq) == true || upperq < 0) {
    document.querySelector("#quantityupper").value = 5;
    upperq = 5;
  }

  if (!isNaN(numberq) == true || numberq < 0) {
    document.querySelector("#quantitynumber").value = 5;
    numberq = 5;
  }

  if (!isNaN(specialq) == true || specialq < 0) {
    document.querySelector("#quantityespecial").value = 5;
    specialq = 5;
  }

}