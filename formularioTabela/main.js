//Função para adicionar uma nova linhas

function addToTable(){
    //definindo as variaveis e recebendo os dados
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work = document.getElementById('work').value;
    let table = document.getElementById('myTable');

    let tableSize = table.rows.length; //calculando o tamanho da tabela
    let row = table.insertRow(tableSize); //insere uma linha
    let cell1 = row.insertCell(0); //insere as colunas/celulas
    let cell2 = row.insertCell(1); //insere as colunas/celulas
    let cell3 = row.insertCell(2); //insere as colunas/celulas
    let cell4 = row.insertCell(3); //insere as colunas/celulas
    let cell5 = row.insertCell(4);//insere as colunas/celulas
    let cell6 = row.insertCell(5); //insere as colunas/celulas
    row.id = tableSize //adicionando o id no elemento a ser criado

    //Criando o código do botão para remover a linha
    let btnCode = "<button onclick='removeFromTable(this)'>Remover</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;
    
    //Limpando os campos de inserção de dados
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('work').value = "";

    //Retornando "false" para impedir o reload da página
    return false;

}

//Função para remover uma linha
function removeFromTable(id){
    let row = id.parentNode.parentNode.id;
    row = document.getElementById(row);
    row.parentNode.removeChild(row);
    
    return false;

}
