//info = bussinesLogic

let personas = [];


function addPerson(pid, pnombre, pciudad, pcumple, pemail){

    let newPerson ={
        id : pid,
        nombre : pnombre,
        ciudad : pciudad,
        cumpleanos : pcumple,
        email : pemail
    }
    personas.push(newPerson);
    localStoragePersonList(personas);
}

function getPersonList(){
    let storeList = localStorage.getItem('localPersonList');
    if(storeList == null){
        personas = []
    }else{
        personas = JSON.parse(storeList);
    }
    return personas;
}

function localStoragePersonList(plist){
    localStorage.setItem('localPersonList', JSON.stringify(plist));
}





document.querySelector('#btnGuardarPersona').addEventListener('click', guardarPersona);
imprimirTabla();

function guardarPersona(){
    let gId = document.querySelector('#txtId').value,
        gNombre = document.querySelector('#txtNombre').value,
        gCiudad = document.querySelector('#txtCiudad').value,
        gCumple = document.querySelector('#txtCumpleanos').value,
        gCorreo = document.querySelector('#txtCorreo').value


    addPerson(gId, gNombre, gCiudad, gCumple, gCorreo);
    imprimirTabla();
}

function imprimirTabla(){

    let list = getPersonList(),
        tbody = document.querySelector('#friendsTable tbody');

    tbody.innerHTML = '';

    for(let i = 0; i < list.length; i++){
        let row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            nombreCell = row.insertCell(1),
            ciudadCell = row.insertCell(2),
            cumpleCell = row.insertCell(3),
            correoCell = row.insertCell(4),
            selectCell = row.insertCell(5);



        idCell.innerHTML = list[i].id;
        nombreCell.innerHTML = list[i].nombre;
        ciudadCell.innerHTML = list[i].ciudad;
        cumpleCell.innerHTML = list[i].cumpleanos;
        correoCell.innerHTML = list[i].email;

        let inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;
        selectCell.appendChild(inputSelect);



        tbody.appendChild(row);
        
    }
}