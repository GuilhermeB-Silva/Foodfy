function addIngredient() {
    const ingredients = document.querySelector(".all_ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
    .querySelector(".ingredients_recipe  button")
    .addEventListener("click", addIngredient);


    function addIngredient2() {
      const ingredients = document.querySelector(".all_prepare");
      const fieldContainer = document.querySelectorAll(".preparation");
    
      // Realiza um clone do último ingrediente adicionado
      const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    
      // Não adiciona um novo input se o último tem um valor vazio
      if (newField.children[0].value == "") return false;
    
      // Deixa o valor do input vazio
      newField.children[0].value = "";
      ingredients.appendChild(newField);
    }
    
    document
      .querySelector(".preparation_recipe button")
      .addEventListener("click", addIngredient2);