function showModal(element) {
    var ModName = element.dataset.modal;  
    var mod = document.getElementById(ModName);
    mod.classList.add('show');
    mod.classList.remove('close');
  }

  function closeModal(element) {
    var ModName = element.dataset.close;  
    console.log(ModName);
    var mod = document.getElementById(ModName);
    mod.classList.add('close');
    mod.classList.remove('show');
  }