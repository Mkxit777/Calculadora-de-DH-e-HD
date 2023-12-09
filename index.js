function abrirPopup() {
    var popup = window.open('popup.html', '_blank', 'width=400,height=500');
    popup.addEventListener('load', function () {
        popup.calcularNotas = function () {
            var valor = parseFloat(popup.document.getElementById('valor').value) || 0;


            var hora = valor/24

            var resultadosDiv = popup.document.getElementById('resultados');
            resultadosDiv.innerHTML = `
                <p>Horas em Dias: ${hora} dia.</p>
            `;
        };
    });
}