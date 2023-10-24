const btn = document.querySelector('button');
const loading = document.querySelector('.robot .loading');
const check = document.querySelector('.robot input[type=checkbox]');
const blockdiv = document.querySelector('.robot .blockdiv');

btn.addEventListener('click', function(event) {

    if(!input.value.trim()) {
        return;
    }

    if(event.target.innerText == '') {}

    input.value = '';
})

check.addEventListener('click', function(e) {
    check.style.display = 'none';
    loading.style.display = 'flex';

    setInterval(function() {
        check.style.display = 'flex';
        loading.style.display = 'none';
        blockdiv.style.display = 'flex';
    }, 1500)
})