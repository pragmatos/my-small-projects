(function(){
    var slider = new Slider();
    Lib.loadImages(function(data){
        slider.images = data;
        slider.currentPosition = Math.floor((data.length-1)/2);
        slider.printImages();
        slider.changeMainImg();
        slider.updateImages();

        bindEvents();
    });

    function bindEvents(){

        var imagesEvent = document.querySelectorAll('.images img');
        var submitRemove = document.querySelector('input[type="submit"].remove');
        var submitAdd = document.querySelector('input[type="submit"].add');
        submitRemove.addEventListener('click', function(e){
            slider.removeCurrent();
        });
        submitAdd.addEventListener('click', function(e){
            slider.addImage();
        });
        slider.rightArrow.addEventListener('click', function(e){
            slider.onChangeCurPos(slider.currentPosition + 1);
        });
        slider.leftArrow.addEventListener('click', function(e){
            slider.onChangeCurPos(slider.currentPosition - 1);
        });
        for(var i = 0; i < imagesEvent.length; i++){
            imagesEvent[i].addEventListener('click', function(e){
                slider.onChangeCurPos(e.target.dataset.index);

            });
        }
    }

})();