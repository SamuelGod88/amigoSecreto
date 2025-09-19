let amigos = [];
    function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
 } function actualizarLista(){ 
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }  }
    function sortearAmigo() {
        if (amigos.length == 0) {
            alert("No hay amigos para sortear.");
            return;
        }
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        const resultado = document.getElementById("resultado");
        resultado.textContent = "El amigo secreto es: " + amigoSorteado;
         }
 ; 