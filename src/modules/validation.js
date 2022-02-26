const validation = () => {
   const forms = document.querySelectorAll('form[name="user_form"]');
   
   forms.forEach(form  => {
      const inputs = form.querySelectorAll('input');

      inputs.forEach(input => {
         if(input.getAttribute("name") === "user_name" || input.getAttribute("name") === "user_message") {
            input.addEventListener('input', () => {
               input.value = input.value.replace(/[^а-яА-Я\s-]/g, "");
            });
         }
         if(input.getAttribute("name") === "user_email") {
            input.addEventListener('input', () => input.value = input.value.replace(/[^\w@-_\.!~\*']/g, ""));
         }
         if(input.getAttribute("name") === "user_phone") {
            input.addEventListener('input', () => input.value = input.value.replace(/[^\d()-]/g, ""));
         }
      });
   });

   const calcValidation = () => {
      const calcItems = document.querySelectorAll('input.calc-item');

      calcItems.forEach(input => {
         input.addEventListener('input', () => input.value = input.value.replace(/[^\d]/g, ""));
      });
   };

   calcValidation();
};

export default validation;