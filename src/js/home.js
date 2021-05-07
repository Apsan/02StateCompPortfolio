document.addEventListener('DOMContentLoaded', () => {
    let navbar = getElement("#navbar");
    let navToggle = getElement("#navToggle");
    navToggle.addEventListener("click", function(){
        if(navbar.classList.contains("is-active")){
            navbar.classList.remove("is-active")
            navToggle.classList.remove("is-active")
        }else{
            navbar.classList.add("is-active")
            navToggle.classList.add("is-active")
        }
        
    })
  
  });
  function getElement(query){
      return document.querySelector(query);
  }