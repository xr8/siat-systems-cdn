/*
BTN

id="btnRefresh"  -----> xhr
id="btnNew"      -----> modal  
id="btnUpdate"   -----> modal 
id="btnDelete"   -----> modal 

BTN Modal
id="btnGneUser          -----> xhr
id="btnUpdatePacientes" -----> xhr
id="btnDeleteUser"      -----> xhr

BTN
id="btnConsultas"  ----->
id="btnHistorial"  ----->
id="btnRecetas"    ----->

*/

/*##### Btn Create #####*/
//------------------------------------------------->
function consultaNew(){
    console.log('Run: consulta New')
    $(document).on('click', 'button#btnGuardar', function() {
        consultasNewJqxhr()
    })
}
//------------------------------------------------->

/*##### Btn Reade #####*/
//------------------------------------------------->

    /*##### Btn Refresh #####*/
    //------------------------------------------------->
    function btnRefresh(){
        console.log('Run: btnRefresh')
        $(document).on('click', 'button#btnRefresh', function() {
            pacientesViewJqxhr()
        })
    }
    //------------------------------------------------->

//------------------------------------------------->

/*##### Btn Update #####*/
//------------------------------------------------->
function pacientesUpdate(){
    console.log('Run: Usuarios New 1')
    $(document).on('click','button#btnUpdatePacientes', function() {
        updatePacientesJqxhr()
    })
}
//------------------------------------------------->

/*##### D #####*/
//------------------------------------------------->
function pacientesDelete(){
    console.log('Run: Usuarios Delete 1')
    $(document).on('click','button#btnDeleteUser', function() {
        pacientesDeleteJqxhr()
    })
}
//------------------------------------------------->

function btnConsultas() { 
    $(document).on('click','button#btnConsultas', function() {
        const varIdadvance = $("#id_advance").val()
        modalLoadShow()
        setTimeout(() => {
            window.location.assign(`../pacientes/consultas?id_advance=${varIdadvance}`)
        }, 1000);        
    });
}
function btnHistorial() { 
    $(document).on('click','button#btnHistorial', function() {
        const varIdadvance = $("#id_advance").val()
        modalLoadShow()
        setTimeout(() => {
            window.location.assign(`../pacientes/historial?id_advance=${varIdadvance}`)
        }, 1000);        
    });
}
function btnGuardarImprimir() { 
    $(document).on('click','button#btnGuardarImprimir', function() {
        printDiv()        
    })

    console.info('Run: BTN Guardar e Imprimir')
}

