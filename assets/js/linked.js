let i = document.querySelector('#individual');
let en = document.querySelector('#enterprise');

let enDefaultOpac = 0.5;
let iDefaultOpac = 1.0;

i.addEventListener('click', (e) => {
    i.style.opacity = '1.0';
    en.style.opacity = '0.5';
    document.querySelector('#individualContainer').style.display = '';
    document.querySelector('#enterpriseContainer').style.display = 'none'
    i.classList.add('selected')
    en.classList.remove('selected');
})

en.addEventListener('click', (e) => {
    en.style.opacity = '1.0';
    i.style.opacity = '0.5';
    document.querySelector('#individualContainer').style.display = 'none';
    document.querySelector('#enterpriseContainer').style.display = ''
    en.classList.add('selected')
    i.classList.remove('selected');
})

let items = [i, en]

for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', () => {
        items[i].style.opacity = 1.0;
    })
    items[i].addEventListener('mouseleave', () => {
        if(items[i].classList.contains('selected')) {
            items[i].style.opacity = 1.0;
        } else {
            items[i].style.opacity = 0.5;
        }
    })
}

let jonahText = '"Being a student full-time, I was interested in finding remote contract work that could help pay for my schooling. linked allowed me to continue to network even while I was in class or studying. Thanks to linked, I was able to find a part-time position that allows me to focus on schooling, while also earning money to help pay for it." \n -Jonah'
let reaganText ='"As a saleswoman for a savvy tech startup, I need to get in contact with as many business leaders as possible on a daily basis. While cold-calling and networking has its advantages, the passive power that linked gives me to expand my presence on LinkedIn is paramount. With linked, clients actually come to me. Giving me a huge advantage over my competitors." \n -Reagan'
let kristianText = ' "I have a passion for the outdoors and for technology, but I found it difficult to connect with like-minded individuals who were interested in making a difference. The power of linked comes from its ability to work even when I can\'t. While i\'m out on the mountain or wading  down stream, linked is hard at work establishing and maintaining my connections online." \n -Kristian'

let jonahPhoto = 'file:///Users/nickecton/Desktop/Portfolio/images/jonahFace.jpeg'
let reaganPhoto = 'file:///Users/nickecton/Desktop/Portfolio/images/reaganFace.jpeg'
let kristianPhoto = 'file:///Users/nickecton/Desktop/Portfolio/images/kristianFace.jpeg'

let images = document.querySelectorAll('.face');

let clickedFace = function(e) {
    // debugger
    let text = document.querySelector('#testimonialText');
    images = document.querySelectorAll('.face');
    let target = e.target.id;

    if(e.target.src === kristianPhoto) {
        text.innerText = kristianText;
    } else if(e.target.src === jonahPhoto) {
        text.innerText = jonahText;
    } else if(e.target.src == reaganPhoto) {
        text.innerText = reaganText;
    }

    if(target !== 'foreground') {
        let foreground = document.querySelector('#foreground')
        let foregroundSrc = foreground.src;
        let targetSrc = e.target.src;

        foreground.src = targetSrc;
        e.target.src = foregroundSrc;
    }

}

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', clickedFace)
}




