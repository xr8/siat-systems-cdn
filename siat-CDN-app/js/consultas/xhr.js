
/*##### C #####*/
//------------------------------------------------->
function consultasNewJqxhr(){
    console.log('Run: Consulta New Xhr')

        //Examen Fisico
        let efTensionArterial         = $("#efTensionArterial").val();
        let efFrecuenciaCardiaca      = $("#efFrecuenciaCardiaca").val();
        let efTemperatura             = $("#efTemperatura").val();
        let efPeso                    = $("#efPeso").val();
        let efAltura                  = $("#efAltura").val();
        let efImc                     = $("#efImc").val();
        
        //Habitos Toxicos
        let htAlcohol                 = $("#htAlcohol").val();
        let htTabaco                  = $("#htTabaco").val();
        let htDrogas                  = $("#htDrogas").val();
        
        //Consulta
        let cMotivoConsulta           = $("#cMotivoConsulta").val();
        let cEnfermedadActual         = $("#cEnfermedadActual").val();
        let cAntecedentesEnfermedades = $("#cAntecedentesEnfermedades").val();
        
        //Receta
        let rReceta                   = $("#rReceta").val();
        
        //BTN
        /*
        btnGuardar
        btnGuardarImprimir
        btnLimpiar
        */

    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'consultas/consultasNew',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },
        "data": {         
        'ef_ta'       : efTensionArterial,
        'ef_fc'       : efFrecuenciaCardiaca,
        'ef_t'        : efTemperatura,
        'ef_p'        : efPeso,
        'ef_a'        : efAltura,
        'ef_imc'      : efImc,
        'ht_a'        : htAlcohol,
        'ht_t'        : htTabaco,
        'ht_d'        : htDrogas,
        'con_mc'      : cMotivoConsulta,
        'con_ea'      : cEnfermedadActual,
        'con_aea'     : cAntecedentesEnfermedades
        }
    }

    var jqxhr = $.ajax(settings)
        .done(function (data){
            console.info('Run: Done xhr Consultas')
            /*
            var miModal = document.getElementById('newModal');
            var modalInstance = bootstrap.Modal.getInstance(miModal); 
            if (!modalInstance) {
            modalInstance = new bootstrap.Modal(miModal);
            }
            */
            //modalInstance.hide();   
        })
        .fail(function(jqXHR,textStatus,errorThrown){
            console.info('Run: Fail error Consultas')
            xhrError(jqXHR, textStatus , errorThrown);
        })
        .always(function(){
            //pacientesViewJqxhr()
            console.info('Run: Always Consultas xhr')        
        })

    console.warn(jqxhr)
}
//------------------------------------------------->

/*##### R #####*/
//------------------------------------------------->
function pacientesViewOneJqxhr(){
    console.log('Run: Paciente View Xhr')
   /* 
   $("#allUser").fadeOut(1000).empty()
    modalLoadShow()
    */
    modalLoadShow()
    let idAdvanceInput = $("#id_advance").val();
    let settings = {
        url: urlBaseApi + "/pacientes/pacientesView?querty=" + idAdvanceInput,
        method: "GET",
        timeout: 0,
        headers: {
        Authorization: "Basic cm9vdDphZG1pbg==",
        },
    };
    
    let jqxhr = $.getJSON(settings)
        .done(function (data){  
            
            $.each(data, function(i, val) {
            //--->

                if(val == "null"){
                    //alert("Null")
                    //$("#allUser").append("<tr><td>no hay pacientes</td></tr>")
                }else{
                    /*
                    if(val.user == "admin"){
                        alert("admin")
                        //a = "<td></td>" 
                    }else{
                        alert("no admin")
                        //a = "<td><input type=\"checkbox\" name=\"\" value=\"" + val.id_advance + "\"></td>" 
                    }
                    */
                }

                $("#pacienteNombre,#recetaNombre").html(val.firstname + " " + val.secondname);
                $("#recetaSexo").html(val.sexo);
                $("#recetaNacimiento").html(val.nacimiento);
                /*
                https://codepen.io/eucm2/pen/PZOKQE
                https://momentjs.com/
                */
                var nacimiento=moment(val.nacimiento);
                var hoy=moment();
                var anios=hoy.diff(nacimiento,"years");
                
                $("#recetaEdad").html(anios);
                

            //--->
            })
            
        })
        .fail  (function (jqXHR,textStatus,errorThrown){
            console.error("Run: error pacientes View Jqxhr");
            xhrError(jqXHR, textStatus, errorThrown);
        })
        .always(function (jqXHR,textStatus,errorThrown){
            modalLoadHide()
            /*
            modalLoadHide()
            $("#allUser").fadeIn(1000)
            */
        })

    console.warn(jqxhr);
}
//------------------------------------------------->

/*##### U #####*/
//------------------------------------------------->
function updatePacientesJqxhr(){
    console.log('Run: Paciente Update Xhr')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'pacientes/pacientesUpdate',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },
        "data": {
        "id_advance"  : $("#id_advance").val(),
        "permissions" : 'paciente',
        "email"       : $("#uuemail").val(),
        "first"       : $("#uufirstName").val(),
        "second"      : $("#uulastName").val(),
        "tel"         : $("#uuPhone").val(),
        "puesto"      : 'drpacientes'
        }
    }

    var jqxhr = $.ajax(settings)
        .done(function (data){
            console.log('Run: update modal closed')
            var updateModal = document.getElementById('updateModal');
            var modalInstance = bootstrap.Modal.getInstance(updateModal)
            if (!modalInstance) {
            modalInstance = new bootstrap.Modal(updateModal);
            }
            modalInstance.hide();       
        })
        .fail(function(jqXHR,textStatus,errorThrown){
            console.info('Run: error alluser')
            xhrError(jqXHR, textStatus , errorThrown);
        })
        .always(function(){
            pacientesViewJqxhr()
            $("#btnUpdate,#btnDelete").prop('disabled',true)
            console.info('Run: Loadpacientes xhr')        
        })
    
    console.warn(jqxhr)
}
//------------------------------------------------->

/*##### D #####*/
//------------------------------------------------->
function pacientesDeleteJqxhr(){
    console.log('Run: Paciente Delete Xhr')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'pacientes/pacientesDelete',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },
        "data": {
        "id_advance"  : $("#id_advance").val()
        }
    }

    var jqxhr = $.ajax(settings)
        .done(function (data){
            console.log('Run: delete modal closed')
            var deleteModal = document.getElementById('deleteModal');
            var modalInstance = bootstrap.Modal.getInstance(deleteModal)
            if (!modalInstance) {
            modalInstance = new bootstrap.Modal(deleteModal);
            }
            modalInstance.hide();  
        })
        .fail(function(jqXHR,textStatus,errorThrown){
            console.info('Run: error alluser')
            xhrError(jqXHR, textStatus , errorThrown);
        })
        .always(function(){
            pacientesViewJqxhr()
            $("#btnUpdate,#btnDelete").prop('disabled',true)
            console.info('Run: Loadpacientes xhr')        
        })
    
    console.warn(jqxhr)
}
//------------------------------------------------->