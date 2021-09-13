const forms = ()=>{

    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');


    const postData = async (url, data)=>{

     document.querySelector('.status').textContent = message.loading;

     let res = await fetch(url, {

        method: 'POST',
        body : data

     });

     return await res.text();

    };

    const clearInputs = ()=>{

       input.forEach((item)=>{

        item.value = '';

       });

    }

    const message = {

        loading: 'загрузка',
        sucsess: 'спасибо с вами свяжутся',
        failure: 'что то пошло не так.....'
    }


    form.forEach((item)=>{

      item.addEventListener('submit', (e)=>{

       e.preventDefault();

       let statusMessage = document.createElement('div');
       statusMessage.classList.add('status');
       item.appendChild(statusMessage);


       const formData = new FormData(item);
        
       postData('assets/server.php', formData)
         .then(res=>{

            console.log(res);
            statusMessage.textContent = message.sucsess;

         })
         .catch(()=>{
            statusMessage.textContent = message.failure;

         })
      .finally(()=>{

        clearInputs();

        setTimeout(()=>{


            statusMessage.remove()

        }, 5000);

      });

      });




    });

};

export default forms;