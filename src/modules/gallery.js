function gallery(slidesSelector, nextSelector, prevSelector, demosSelector, categorySelector, categoryParentSelector, bigImgsSelector, demoImgsSelector, optionSelector, optionParentSelector) {
    const slides =  document.querySelectorAll(slidesSelector),
          next = document.querySelector(nextSelector),
          prev = document.querySelector(prevSelector),
          demos = document.querySelectorAll(demosSelector),
          categoryParent = document.querySelector(categoryParentSelector),
          categories = document.querySelectorAll(categorySelector),
          bigImgs = document.querySelectorAll(bigImgsSelector),
          demoImgs = document.querySelectorAll(demoImgsSelector),
          option = document.querySelectorAll(optionSelector),
          optionParent = document.querySelector(optionParentSelector);

    let slideIndex = 1;

    categorySelection(categoryParent, categories, categorySelector);
    categorySelection(optionParent, option, optionSelector);
    showSlide(slideIndex);

    function categorySelection(parent, categories, selector) {
        parent.addEventListener('click', function(event) {
            slideIndex= 1;
            showSlide(slideIndex);

            categories.forEach(item => item.classList.remove('gallery__select-active'));

            if(event.target && event.target.classList.contains(selector.slice(1))) {
                event.target.classList.add('gallery__select-active');

                let category = event.target.dataset.category;

                for (let i = 0; i < bigImgs.length; i++) {
                    bigImgs[i].src = `./src/img/gallery/${category}/${i+1}.jpg`;
                    demoImgs[i].src = `./src/img/gallery/${category}/${i+1}.jpg`;
                }
            }
        });
    }

    function showSlide(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => {
            item.style.display = "none";
        });
        
        slides[slideIndex-1].style.display = "block";

        demos.forEach((item) => {
            item.classList.remove('gallery__mini_img-active');
        });
        demos[slideIndex-1].classList.add('gallery__mini_img-active');
    }

    demos.forEach((item, i) => {
        item.addEventListener('click', () => {
            currentSlide(i+1);
        })
    });

    function plusSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    next.addEventListener('click', () => {
        plusSlide(1);
        
    });

    prev.addEventListener('click', () => {
        plusSlide(-1);
    });

}

export default gallery;