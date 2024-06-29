const form = document.getElementById('form');
        const carneH = 0.5; // Kg por homem
        const frangoH = 0.2; // Kg por homem
        const linguicaH = 0.2; // Kg por homem
        const refriH = 0.3; // L por homem
        const cervejaH = 0.8; // L por homem
        const carneM = 0.3; // Kg por mulher
        const frangoM = 0.2; // Kg por mulher
        const linguicaM = 0.2; // Kg por mulher
        const refriM = 0.4; // L por mulher
        const cervejaM = 0.5; // L por mulher
        const carneC = 0.2; // Kg por criança
        const frangoC = 0.1; // Kg por criança
        const linguicaC = 0.2; // Kg por criança
        const refriC = 0.2; // L por criança
        const cervejaC = 0; // L por criança

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const homens = parseInt(document.getElementById('homens').value) || 0;
            const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
            const criancas = parseInt(document.getElementById('criancas').value) || 0;
            const resultado = document.getElementById('resultado');

            const carneT = (homens * carneH) + (mulheres * carneM) + (criancas * carneC);
            const frangoT = (homens * frangoH) + (mulheres * frangoM) + (criancas * frangoC);
            const linguicaT = (homens * linguicaH) + (mulheres * linguicaM) + (criancas * linguicaC);
            const refriT = (homens * refriH) + (mulheres * refriM) + (criancas * refriC);
            const cervejaTotal = (homens * cervejaH) + (mulheres * cervejaM) + (criancas * cervejaC);

            calcule(carneT, frangoT, linguicaT, refriT, cervejaTotal);
        });

        function calcule(carneT, frangoT, linguicaT, refriT, cervejaT) {
            const carneTotal = carneT.toFixed(2) + ' Kg de carne bovina<br>';
            const frangoTotal = frangoT.toFixed(2) + ' Kg de frango<br>';
            const linguicaTotal = linguicaT.toFixed(2) + ' Kg de linguiça<br>';
            const refriTotal = refriT.toFixed(2) + ' L de refrigerante<br>';
            const cervejaTotal = cervejaT.toFixed(2) + ' L de cerveja<br>';

            const resultado = document.getElementById('resultado');
            resultado.innerHTML = '<h3>Resultado do Churrasco:</h3>' + carneTotal + frangoTotal + linguicaTotal + refriTotal + cervejaTotal;
        }