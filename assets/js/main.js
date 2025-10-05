import { clipboard } from "./clipboard.js";
import { gerarSenha } from "./generator.js";
import { setupCarousel } from "./carousel.js";
import { swapTheme } from "./themeSwap.js";
import { setupCheckPass } from "./checkPass.js";
import { Checkbox, checkInputs } from "./check.js";



window.clipboard = clipboard; ///setup clipboard function
setupCarousel(); ///setup the carrousel
swapTheme(); ///setup the theme swap function
setupCheckPass(); ///setup the password check function


// Run before load the page
window.onload = function () {
  // Get vars
  let lowerq = Number(document.querySelector("#quantitylower").value);
  let upperq = Number(document.querySelector("#quantityupper").value);
  let numberq = Number(document.querySelector("#quantitynumber").value);
  let specialq = Number(document.querySelector("#quantityespecial").value);

  document.documentElement.style.removeProperty("color-scheme");

  // Show quantity
  let total = lowerq + upperq + numberq + specialq;

  document.querySelector("#total").innerText = total;

};




window.gerar = function (_index) {
  let password = document.querySelector("#password");
  let lowerq = Number(document.querySelector("#quantitylower").value);
  let upperq = Number(document.querySelector("#quantityupper").value);
  let numberq = Number(document.querySelector("#quantitynumber").value);
  let specialq = Number(document.querySelector("#quantityespecial").value);
  let _mode = document.querySelector("#check").checked;

  checkInputs();

  if (_mode == false) {
    let total = lowerq + upperq + numberq + specialq;
    document.querySelector("#total").value = total;
  }

  if (_index) password.value = gerarSenha(upperq, lowerq, numberq, specialq, total.value, _mode);
}





// Show password

document.querySelector("#pass_button").addEventListener("click", function () {
  
  let password = document.querySelector("#password");
  if (password.type === "password") {
    password.type = "text";
    this.innerText = "Esconder senha";
  } else {
    password.type = "password";
    this.innerText = "Monstrar senha";
  }
}
)


document.querySelector("#check").addEventListener("click",  Checkbox);


