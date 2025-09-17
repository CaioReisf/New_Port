const tempoCarregamento = 2000; 

window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    
    loadingScreen.classList.add("fade-out");

   
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 800); 
  }, tempoCarregamento);
});




const itensMenu = document.querySelectorAll('.menu li');
const secoes = document.querySelectorAll('.secao');

itensMenu.forEach(item => {
  item.addEventListener('click', () => {
    
    itensMenu.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    
    const alvo = item.dataset.target;
    secoes.forEach(secao => {
      secao.classList.toggle('active', secao.id === alvo);
    });
  });
});

 const el = document.getElementById("text");
    const frases = [
      "Desenvolvedor Full-Stack",
      "Desenvolvedor Freelancer",
      "Especialista em Front-End"
    ];

    let fraseIndex = 0;
    let charIndex = 0;
    let apagando = false;

    function digita() {
      const fraseAtual = frases[fraseIndex];
      if (!apagando) {
        el.textContent = fraseAtual.substring(0, charIndex + 1);
        charIndex++;
        el.style.color ='#8a2be2'

        if (charIndex === fraseAtual.length) {
          apagando = true;
          setTimeout(digita, 1800);
          return;
        }
      } else {
        el.textContent = fraseAtual.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          apagando = false;
          fraseIndex = (fraseIndex + 1) % frases.length;
        }
      }

      setTimeout(digita, apagando ? 50 : 100); 
    }

    digita();