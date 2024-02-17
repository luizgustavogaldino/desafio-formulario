const dadosFormulario = document.querySelectorAll('.item');
const acaoBotao = document.querySelector('.button')

console.log(acaoBotao)

acaoBotao.addEventListener('click', (evento) => {
    evento.preventDefault()

    dadosFormulario.forEach((item) => {
        if (item.value) {
            item.classList.add('campo-preenchido')
            item.nextElementSibling.classList.remove('erro')
        } else {
            item.classList.remove('campo-preenchido')
            item.classList.add('campo-vazio')
            item.nextElementSibling.classList.add('erro')
        }
    });
})



