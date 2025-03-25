 const form = document.querySelector(".contacts__form");

  
  const handleFormSubmit = (event) => {
      event.preventDefault(); 

      const nameInput = form.querySelector("input[type='text']");
      const emailInput = form.querySelector("input[type='email']");
      const messageInput = form.querySelector("textarea");
      const radioButtons = form.querySelectorAll("input[type='radio']");
      const selectedRadio = [...radioButtons].some(radio => radio.checked);

      let isValid = true;

    
      form.querySelectorAll(".error-message").forEach(el => el.remove());

   
      if (nameInput.value.trim() === "") {
          showError(nameInput, "Name is required.");
          isValid = false;
      }

 
      if (!validateEmail(emailInput.value)) {
          showError(emailInput, "Enter a valid email address.");
          isValid = false;
      }

      
      if (messageInput.value.trim() === "") {
          showError(messageInput, "Message cannot be empty.");
          isValid = false;
      }

     
      if (!selectedRadio) {
          showError(radioButtons[0], "Please select an option.");
          isValid = false;
      }

     
      if (isValid) {
          alert("Form submitted successfully!");
          form.reset(); 
      }
  };

  
  form.addEventListener("submit", handleFormSubmit);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

 
  const showError = (input, message) => {
      const errorElement = document.createElement("div");
      errorElement.className = "error-message";
      errorElement.style.color = "red";
      errorElement.style.fontSize = "12px";
      errorElement.style.marginTop = "5px";
      errorElement.textContent = message;

      if (input.type === "radio") {
          input.parentElement.appendChild(errorElement);
      } else {
          input.insertAdjacentElement("afterend", errorElement);
      }
  };
