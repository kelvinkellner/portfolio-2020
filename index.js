let count = 0;

function smileyEasterEgg() {
    count++;
    const smiley = document.getElementById('smiley');
    const clone = smiley.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.top = document.getElementById('title').getBoundingClientRect().top;
    clone.id = 'smiley-clone-' + count;
    smiley.before(clone);
    clone.classList.add('smiley-easter-egg');
    window.setTimeout(function () {
        clone.remove();
    }, 5000);
}

// Single smiley limit code:
//     const smiley = document.getElementById('smiley');
//     if(!smiley.classList.contains('smiley-easter-egg')) {
//         smiley.classList.add('smiley-easter-egg');
//         window.setTimeout(function () {
//             if(smiley.style.visibility = 'hidden') {
//                 smiley.classList.remove('smiley-easter-egg');
//             }
//         }, 5000);
//     }
// }