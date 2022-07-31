const header = document.querySelector('header');
const main = document.querySelector('main')
const btn = document.querySelector('.button');
const optionContainer = document.querySelector('.optionContainer');
const input = document.querySelector('.input')
const optionItems = document.querySelectorAll('.optionContainer i');
const planContainer = document.querySelector('.planContainer');
const message = document.querySelector('.message')
const closeBtn = document.querySelector('.closeBtn');


btn.addEventListener('click', () => {
    if (input.value == '') {
        message.classList.add('close');
        header.classList.add('disappear');
        main.classList.add('disappear')
    }
    else optionContainer.classList.toggle('move');
});
closeBtn.addEventListener('click', () => {
    message.classList.remove('close');
    header.classList.remove('disappear');
    main.classList.remove('disappear')
});
optionItems.forEach( opt => {
    opt.addEventListener('click', () => {
        optionContainer.classList.toggle('move');
        const optDuplicate = opt.cloneNode();
        planItem(optDuplicate, input.value);
        input.value = ''
    });
});
planContainer.addEventListener('click', doneOrDelete);


function planItem(opt, text) {
    const planItem = document.createElement('div');
    planItem.innerHTML = `
        <p>${text}</p>
        <i class="fa-solid fa-circle-check done"></i>
        <i class="fa-solid fa-circle-trash trash"></i>
    `
    planContainer.appendChild(planItem);
    planItem.insertBefore(opt,planItem.childNodes[1]);
    bgColor(opt, planItem);
};
function bgColor(opt, planItem) {
    if (opt.classList.contains('study')) planItem.style.backgroundColor = '#560bad';
    else if (opt.classList.contains('work')) planItem.style.backgroundColor = '#fb5607';
    else planItem.style.backgroundColor = '#6a994e';
};
function doneOrDelete(event) {
    const targetElement = event.target.classList;
    if(targetElement[2] === 'trash') event.target.parentNode.remove()
    else if (targetElement[2] === 'done') event.target.parentNode.classList.toggle('completed')
}
