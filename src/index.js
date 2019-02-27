import randomColor from 'randomcolor';

function execCommand(name, arg) {
    try {
        document.execCommand(name, true, arg);
    } catch (e) {
        const x = documnet.querySelector('.error-space');
        const errorNode = document.createElement('div');
        errorNode.innerHTML = e.toString();
        x.appendChild(errorNode);
    }
}

window.addEventListener('load', () => {
    const editor = document.querySelector('.editor');
    if (editor) {
        editor.style.color = 'red';
        editor.contentEditable = 'true';
        document.querySelector('#bold').addEventListener('click', () => {
            execCommand('bold');
        })
        document.querySelector('#backColor').addEventListener('click', () => {
            execCommand('backColor', randomColor());
        })
    }
});