function smileyEasterEgg() {
    const smiley = document.getElementById('smiley');
    if(!smiley.classList.contains('smiley-easter-egg')) {
        smiley.classList.add('smiley-easter-egg');
        window.setTimeout(function () {
            if(smiley.style.visibility = 'hidden') {
                smiley.classList.remove('smiley-easter-egg');
            }
        }, 5000);
    }
}