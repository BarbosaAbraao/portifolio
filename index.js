const mostrar = document.querySelector('.mostrar')
const projetoInativo = document.querySelectorAll('.projeto:not(ativo)')

mostrar.addEventListener('click',()=>{
    projetoInativo.forEach(projetoInativo =>{
        projetoInativo.classList.add('ativo')
    })
    mostrar.classList.add("remover")
})