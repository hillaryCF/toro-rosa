(function () {
  const btn_menu = document.getElementById('btn-hamburguer');
  const menu = document.getElementById('menu').children;
  const cont_menu = document.getElementById('sidebar');
  
  function animationMenu() {
    btn_menu.classList.toggle('active');
    cont_menu.classList.toggle('show');
  }

  for(let e of menu ){
    e.addEventListener('click', () => {
      btn_menu.classList.remove('active');
      cont_menu.classList.remove('show');
    });
  }
  btn_menu.addEventListener("click", animationMenu);
})();
