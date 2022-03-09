const sendForm = ({ formId, someElement = [] }) => {
   const form = document.getElementById(formId);
   const statusBlock = document.createElement('div');
   const loadIcon = '<img src="https://img.icons8.com/color/48/000000/spinner-frame-2.png"/>';
   const errorText = 'Ошибка...';
   const successIcon = '<img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"/>';

   const validate = (list) => {
      let success = true;

      list.forEach(input => {
         input.classList.add('success');

         if(input.value.trim() === '') {
            input.classList.remove('success');
         }

         if(!input.classList.contains('success')) {
            success = false;
         }
      });

      return success;
   };

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then(res => res.json());
   };

   const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      statusBlock.innerHTML = loadIcon;
      form.append(statusBlock);

      formData.forEach((val, key) => {
         formBody[key] = val;
      });

      someElement.forEach(elem => {
         const thisElem = document.getElementById(elem.id);
         
         if(elem.type === 'block') {
            formBody[elem.id] = thisElem.textContent;
         }

         if(elem.type === 'input') {
            formBody[elem.id] = thisElem.value;
         }
      });
      
      if(validate(formElements)) {
         sendData(formBody).then(data => {
            formElements.forEach(input => {
               input.value = '';
               input.classList.remove('success');
               statusBlock.innerHTML = successIcon;
            });
         }).catch(error => {
            statusBlock.style.color = 'red';
            statusBlock.textContent = errorText;
         });
      }
   };

   try {
      
      if(!form) {
         throw new Error('Ошибка');
      }

      form.addEventListener('submit', (e) => {
         e.preventDefault();
   
         submitForm();
      });
   } catch (error) {
      console.log(error.message);
   }
};

export default sendForm;