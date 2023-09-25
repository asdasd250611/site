const togglem = document.querySelector('nav .toggle-menu');
const navm = document.querySelector('nav .nav-menu');
togglem.addEventListener('click', function () {
    navm.classList.toggle('show');
    if(navm.classList.contains('show')){
        this.classList.replace('bx-menu', 'bx-x');
    }else{
        this.classList.replace('bx-x', 'bx-menu');
    }
})


const allsection = document.querySelectorAll('section, header');

window.addEventListener('scroll',function (){
    allsection.forEach(item=> {
        if(this.scrollY >= (item.offsetTop - 50) && this.scrollY <= ((item.offsetTop + item.offsetHeight) - 50)) {
            navm.querySelector('a.active').classList.remove('active');
            navm.querySelector(`a[href="#${item.id}"]`).classList.add('active');
        }
    })
})