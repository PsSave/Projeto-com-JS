export default function initModal(){

  const botAbrir = document.querySelector('[data-modal="abrir"]');
  const botFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  
  if(botAbrir && botFechar && containerModal){
    function ToggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    
    function cliqueFora(event){
      if(event.target === this){
        ToggleModal(event);
      }
    }
    
    botAbrir.addEventListener('click', ToggleModal);
    botFechar.addEventListener('click', ToggleModal);
    containerModal.addEventListener('click', cliqueFora)
  }
}
