function Slider(){
    this.images = [];
    this.currentPosition = 0;
    this.rightArrow = document.querySelector('.arrow-right');
    this.leftArrow = document.querySelector('.arrow-left');
    this.currentImage = document.querySelector('.item img');
    this.currentTitle = document.querySelector(' .item h2');
    this.mainImage = document.querySelector('.item');

}
Slider.prototype.onChangeCurPos = function(n) {
    var main = this;
    this.mainImage.className = 'item';
    this.currentPosition = (parseInt(n)+this.images.length) % this.images.length;
    this.changeMainImg();
    setTimeout(function(){
        main.mainImage.className = 'item animate';
    },10);
    this.updateImages();
}
Slider.prototype.changeMainImg = function(){

    this.currentImage.setAttribute('src', this.images[this.currentPosition].url);
    this.currentTitle.innerText = this.images[this.currentPosition].title;
}
Slider.prototype.updateImages = function(){

    var images = document.querySelectorAll('.images img');

    for(var i = 0; i < images.length; i++){
        images[i].classList.remove('border');
        images[i].setAttribute('data-index', i.toString());
    }

    images[this.currentPosition].classList.add('border');
}
Slider.prototype.removeCurrent = function(){
    var parent = document.querySelector('.images');
    var self = this;
    if(self.images.length > 1) {
        self.images.splice(self.currentPosition, 1);
        Lib.saveJSON(this.images, function(res){
            parent.removeChild(parent.childNodes[self.currentPosition]);
            self.currentPosition = self.currentPosition > 0 ? self.currentPosition - 1 : 0;
            self.changeMainImg();
            self.updateImages();

        });
    }
    else{
        alert("Trust me ;)")
    }
}

Slider.prototype.addImage = function(){
    var valid1 = false;
    var valid2 = false;
    var self = this;
    var title = document.querySelector('input[name="title"]');
    var url = document.querySelector('input[name="url"]');

    if(title.value.length != 0){
        title.classList.remove('warn');valid1 = true;

    }else{
        title.classList.add('warn');valid1 = false;
    }
    if(url.length != 0 &&  /\.(jpe?g|png|gif|bmp)$/i.test(url.value) ){
        url.classList.remove('warn');
        valid2 = true;
    }
    else{
        url.classList.add('warn');valid2 = false;
    }

    if(valid1 && valid2){
        this.images.push({
            title: title.value,
            url: url.value
        });
        Lib.saveJSON(this.images, function(){
            self.currentPosition = self.images.length-1;
            self.changeMainImg();
            self.appendImage();
            self.updateImages();
            title.value = '';
            url.value = '';
        });

    }
}
Slider.prototype.appendImage = function(){
    var parent = document.querySelector('.images');
    var img = document.createElement('img');

    img.setAttribute('src',this.images[this.currentPosition].url);
    img.setAttribute('data-index',this.currentPosition);
    img.addEventListener('click', function(e) {
        this.onChangeCurPos(e.target.dataset.index);
    }.bind(this));
    parent.appendChild(img);

}
Slider.prototype.printImages = function(){
    var tmp = '';
    this.images.forEach(function(item, index){
        tmp +=  '<img src="'+item.url+'" alt="" data-index="'+ index +'"/>';
    });

    var parent = document.querySelector('.images');
    parent.innerHTML = tmp;

}
