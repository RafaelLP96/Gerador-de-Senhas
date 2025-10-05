///Copy to the clipboard
export function clipboard() {
  let get = document.getElementById("password").value;
  let copied = document.getElementById("copy_button");

  setTimeout(() => {
    copied.innerText="Copiar";
  }, 2000);
  navigator.clipboard.writeText(get);

    if (get.length === 0){
    copied.innerText="Senha vazia";
    return
  }else{
    copied.innerText="Copiado";
  }

}
