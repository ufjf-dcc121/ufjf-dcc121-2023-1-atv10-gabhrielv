import { adicionar, getItens, remover} from "./store.js";


const form = document.forms.entrada;
form.addEventListener('submit', envia);
form.Remover.addEventListener('click', remove);

atualiza();

function remove() {
    console.log('Remove clickado!');
    remover();
    atualiza();

}

function envia(evento){
    evento.preventDefault();
    console.log('Formulário enviado!');
    const n = form.valor.value;
    adicionar(n, itens);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const items = getItens();
    for(let i = 0; i < getItens().length; i++)
    {
        const li = document.createElement('li');
        li.textContent = getItens()[i];
        ol.appendChild(li);
    }
    getItens().push("Boom!");
}