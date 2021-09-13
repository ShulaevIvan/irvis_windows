const tabs = (headerSelector, tabSelector, contentSelector, active)=>{

    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTab(){

        content.forEach((item)=>{
            item.style.display = 'none';
        });

        tab.forEach((item)=>{
            item.classList.remove(active);
        });


    };

    function showTab(i = 0){

        content[i].style.display = 'block';
        tab[i].classList.add(active);

    };

    hideTab();
    showTab();

    header.addEventListener('click', function(e){

     let target = e.target;

     if(target && target.classList.contains(tabSelector.replace(/\./, '')) ||
     target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){

        tab.forEach((item, i)=>{


            if(target == item || target.parentNode == item){

                hideTab();
                showTab(i);

            }

        });

     }

    });
}

export default tabs;