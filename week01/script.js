function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    // I am using the addEventListener method to listen for the click event on the button element.
    /* Sehi Arthur*/
    button.addEventListener("click", createParagraph);
  }