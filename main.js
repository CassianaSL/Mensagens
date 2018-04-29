const textarea = document.querySelector('#msg');
const add = document.querySelector('#save');
const section = document.querySelector('.mens');
const del = document.querySelector('#delete');

const addMsg = function(e) {
    if (textarea.value !== '') {
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'cbox';
        div.textContent = textarea.value;
        div.className = 'msgs';
        div.append(checkbox);
        section.append(div);
        textarea.value = '';
    }
};

add.addEventListener('click', addMsg);

textarea.addEventListener('keypress', function(e) {
    if (e.code === 'Enter') addMsg();
});

function deletMsg() {
    const box = document.querySelectorAll('.cbox');
    for (let i = 0; i < box.length; i++) {
        if (box[i].checked) {
            box[i].parentElement.remove();
        }
    }
}

del.addEventListener('click', deletMsg);
