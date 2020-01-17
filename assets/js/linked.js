let i = document.querySelector('#individual');
let en = document.querySelector('#enterprise');

i.addEventListener('click', (e) => {
    i.style.borderBottom = '2px solid blue';
    en.style.borderBottom = 'none';
    document.querySelector('#individualContainer').style.display = '';
    document.querySelector('#enterpriseContainer').style.display = 'none'
})

en.addEventListener('click', (e) => {
    en.style.borderBottom = '2px solid blue';
    i.style.borderBottom = 'none';
    document.querySelector('#individualContainer').style.display = 'none';
    document.querySelector('#enterpriseContainer').style.display = ''
})

let jonahText = '"Being a student full-time, I was interested in finding remote contract work that could help pay for my schooling. linked allowed me to continue to network even while I was in class or studying. Thanks to linked, I was able to find a part-time position that allows me to focus on schooling, while also earning money to help pay for it." \n -Jonah'
let reaganText ='"As a saleswoman for a savvy tech startup, I need to get in contact with as many business leaders as possible on a daily basis. While cold-calling and networking has its advantages, the passive power that linked gives me to expand my presence on LinkedIn is paramount. With linked, clients actually come to me. Giving me a huge advantage over my competitors." \n -Reagan'
let kristianText = ' "I have a passion for the outdoors and for technology, but I found it difficult to connect with like-minded individuals who were interested in making a difference. The power of linked comes from its ability to work even when I can\'t. While i\'m out on the mountain or wading  down stream, linked is hard at work establishing and maintaining my connections online." \n -Kristian'

let images = document.querySelectorAll('.face');

let clickedFace = function(e) {
    let text = document.querySelector('#testimonialText');
    images = document.querySelectorAll('.face');
    let target = e.target.id;
    for(let i = 0; i < images.length; i++) {
        images[i].style.boxShadow = 'none'
        if(images[i].id === target) {
            images[i].style.boxShadow = "cyan 0px 0px 3pt 2pt"
        }
    }
    if(target === 'kristian') {
        text.innerText = kristianText;
    } else if(target === 'jonah') {
        text.innerText = jonahText;
    } else if(target == 'reagan') {
        text.innerText = reaganText;
    }

}

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', clickedFace)
}




