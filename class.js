const button = document.querySelector('button');

const card = document.querySelector('.card');

const listItem = document.querySelector('.list-item');

listItem.addEventListener('click', function (event) {
    console.log(event.target.classList);

    if(event.target.classList.contains('danger')) {
        // event.target.remove();
        console.log('to be removed');
        event.target.parentElement.parentElement.remove();
    }
})
const storage = window.localStorage;
storage.setItem('name', 'kiko');
console.log(storage);
console.log(sessionStorage);
sessionStorage.setItem('name', 'kiko')