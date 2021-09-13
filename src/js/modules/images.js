const images = ()=>{

    let bigImage = document.createElement('img'),
        popupBlock = document.createElement('div'),
        work = document.querySelector('.works');


    popupBlock.classList.add('popup');
    popupBlock.style.display = 'none';
    popupBlock.appendChild(bigImage);
    popupBlock.style.justifyContent = 'center';
    popupBlock.style.alignItems = 'center';
   

    work.addEventListener('click', (e)=>{

        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')){

            
            let path = target.parentNode.getAttribute('href');
            console.log(path);
            bigImage.setAttribute('src', path);
            work.appendChild(popupBlock);
            document.body.style.overflow = 'hidden';
            popupBlock.style.display = 'flex';

        }

        if(target && target.matches('div.popup')){

            popupBlock.style.display = 'none';
            document.body.style.overflow = '';

        }

    });





};

export default images;