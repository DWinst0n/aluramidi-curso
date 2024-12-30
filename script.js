const teclas = document.querySelectorAll('.tecla');
const events = ['click', 'keydown'];

events.forEach((evento) => {
    teclas.forEach((tecla) => {
        tecla.addEventListener(evento, (interacao) => {
            if (evento === 'keydown' && interacao.code !== 'Enter' && interacao.code !== 'Space') {return;}
            tecla.classList.add('ativa');
            const nomeSom = tecla.textContent;
            const som = document.getElementById(`som_tecla_${nomeSom.toLowerCase()}`);
            som.currentTime = 0;
            som.play();
            setTimeout(() => {
                tecla.classList.remove('ativa');
            }, 200);
        });
    });
});