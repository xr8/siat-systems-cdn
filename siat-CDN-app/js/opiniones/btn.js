/*
BTN
id="btnRefresh"  -----> xhr
id="btnNew"      -----> modal  
id="btnUpdate"   -----> modal 
id="btnDelete"   -----> modal 

BTN Modal
id="btnGneUser          -----> xhr
id="btnUpdateopiniones" -----> xhr
id="btnDeleteUser"      -----> xhr
*/

/*##### Btn Create #####*/
//------------------------------------------------->
function opinionesNew(){
    console.log('Run: opiniones New')
    $(document).on('click', 'button#btnGneOpinion', function() {
        opinionesNewJqxhr()
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
            opinionesViewJqxhr()
        })
    }
    //------------------------------------------------->

//------------------------------------------------->

/*##### Btn Update #####*/
//------------------------------------------------->
function opinionesUpdate(){
    console.log('Run: Usuarios New 1')
    $(document).on('click','button#btnUpdateopiniones', function() {
        updateopinionesJqxhr()
    })
}
//------------------------------------------------->

/*##### D #####*/
//------------------------------------------------->
function opinionesDelete(){
    console.log('Run: Usuarios Delete 1')
    $(document).on('click','button#btnDeleteUser', function() {
        opinionesDeleteJqxhr()
    })
}
//------------------------------------------------->
