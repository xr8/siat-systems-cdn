
/*##### C #####*/
//------------------------------------------------->
function opinionesNewJqxhr(){
    console.log('Run: Paciente New Xhr')
        
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'opiniones/opinionesNew',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },"data": {
        "permissions" : 'opiniones',
        "d0"       : $("#nuDato0").val(),
        "d1"       : $("#nuDato1").val(),
        "d2"       : $("#nuDato2").val(),
        "d3"       : $("#nuDato3").val(),
        "d4"       : $("#nuDato4").val(),
        "d5"       : $("#nuDato5").val(),
        "d6"       : $("#nuDato6").val()
        }
    }

    var jqxhr = $.ajax(settings)
        .done(function (data){
            console.info('Run: close modal new xhr paciente')
            var miModal = document.getElementById('newModal');
            var modalInstance = bootstrap.Modal.getInstance(miModal); 
            if (!modalInstance) {
            modalInstance = new bootstrap.Modal(miModal);
            }
            modalInstance.hide();   
        })
        .fail(function(jqXHR,textStatus,errorThrown){
            console.info('Run: error alluser')
            xhrError(jqXHR, textStatus , errorThrown);
        })
        .always(function(){
            clearAll()
            opinionesViewJqxhr()
            console.info('Run: Loadopiniones xhr')        
        })

    console.warn(jqxhr)
}
//------------------------------------------------->

/*##### R #####*/
//------------------------------------------------->
function opinionesViewJqxhr(){
    console.log('Run: Paciente View Xhr')
    $("#allUser").fadeOut(1000).empty()
    modalLoadShow()
    var nuDato0 = $("#nuDato0").val();      
    var settings = {
        url: urlBaseApi + "opiniones/opinionesView?id=" + nuDato0,
        method: "GET",
        timeout: 0,
        headers: {
        Authorization: "Basic cm9vdDphZG1pbg==",
        },
    };
    
    var jqxhr = $.getJSON(settings)
        .done(function (data){  
            //--->
                if(data == "null"){
                    $("#allUser").append("<tr><td>no hay opiniones</td></tr>")
                }else{
                    $.each(data, function (i, val){

                        if(val.user == "admin"){
                            a = "<td></td>" 
                        }else{
                            a = "<td><input type=\"checkbox\" name=\"\" value=\"" + val.id_advance + "\"></td>" 
                        }
                            $("#allUser")
                            .append(
                                "<tr>" +
                                "<td class=\"" + val.id_advance + " id\">"+ + val.id           + "</td>" +
                                "<td class=\"" + val.id_advance + " d1\">" + val.d1+ "</td>" +
                                "<td class=\"" + val.id_advance + " d2\">" + val.d2+ "</td>" +
                                "<td class=\"" + val.id_advance + " d3\">" + val.d3+ "</td>" +
                                "<td class=\"" + val.id_advance + " d4\">" + val.d4+ "</td>" +
                                "<td class=\"" + val.id_advance + " d5\">" + val.d5+ "</td>" +
                                "<td class=\"" + val.id_advance + " d6\">" + val.d6+ "</td>" +
                                "<td><a href='" + '//'+ dominioBase + '/opinion/app/qr/faces/pages/mobile/validadorqr/jsf/?D1=' + val.d1+ '&D2=' + val.d2 + '&D3=' + val.d3 + '_' + val.d4 + '_' + val.d5 + '_' + val.d6 + "' target='_blank'>URL</a></td>" +
                                "<td class=\"" + val.id_advance + " d1\">" + val.count + "</td>" +
                                a +
                                "</tr>"
                            )
                    })
                }
            //--->
        })
        .fail(function (jqXHR, textStatus, errorThrown){
            console.error("Run: error opiniones View Jqxhr");
            xhrError(jqXHR, textStatus, errorThrown);
        })
        .always(function (jqXHR, textStatus, errorThrown){
            modalLoadHide();
            $("#allUser").fadeIn(1000);
        })

    console.warn(jqxhr);
}
//------------------------------------------------->

/*##### U #####*/
//------------------------------------------------->
/*
function updateopinionesJqxhr(){
    console.log('Run: Paciente Update Xhr')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'opiniones/opinionesUpdate',
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
        "puesto"      : 'dropiniones'
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
            opinionesViewJqxhr()
            $("#btnUpdate,#btnDelete").prop('disabled',true)
            console.info('Run: Loadopiniones xhr')        
        })
    
    console.warn(jqxhr)
}
*/
function updateopinionesJqxhr() {
    console.log('Run: Paciente Update Xhr'); // Mensaje en consola para indicar el inicio de la función

    // URL de la API donde se enviarán los datos
    const url = urlBaseApi + 'opiniones/opinionesUpdate';

    // Configuración de los encabezados de la petición HTTP
    const headers = {
        "xr8-api-key": "ewf45r4435trge",                      // Clave de autenticación de la API
        "Content-Type": "application/x-www-form-urlencoded",  // Tipo de contenido de los datos enviados
        "Cache-Control": "no-cache"                          // Deshabilita la caché en la solicitud
    };

    // Datos a enviar en la solicitud AJAX, obtenidos de los campos del formulario
      let x = $('input[type="checkbox"]:checked').val();

    const data = {
        "id_advance": x,
        "d1"        : $('#uuDato1').val(),
        "d2"        : $('#uuDato2').val(),
        "d3"        : $('#uuDato3').val(),
        "d4"        : $('#uuDato4').val(),
        "d5"        : $('#uuDato5').val(),
        "d6"        : $('#uuDato6').val()
    };

    // Realizamos la petición AJAX para actualizar el paciente
    $.ajax({
        url:     url,     // URL de la API
        method:  "POST",  // Método HTTP POST
        headers: headers, // Encabezados configurados
        data:    data     // Datos enviados en el cuerpo de la solicitud
    })
    .then(response => {
        console.log('Run: update modal closed'); // Indica que la actualización fue exitosa
        //updateModal
        // Obtener la referencia del modal de actualización
        const updateModal    = document.getElementById('updateModal');
        // Obtener o crear la instancia del modal para cerrarlo correctamente
        const modalInstance3 = bootstrap.Modal.getOrCreateInstance(updateModal);
        // Cerrar el modal después de la actualización
        modalInstance3.hide();
    })
    .catch((jqXHR, textStatus, errorThrown) => {
        console.info('Run: error alluser'); // Mensaje en consola si hay un error en la solicitud
        // Llamar a la función de manejo de errores con los detalles de la respuesta
        xhrError(jqXHR, textStatus, errorThrown);
    })
    .always(() => {
        // Volver a cargar la lista de opiniones después de la actualización
        opinionesViewJqxhr();  
        //
        modalLoadHide()
        // Deshabilitar los botones de actualización y eliminación para evitar acciones repetidas
        $("#btnUpdate, #btnDelete").prop('disabled', true);
        console.info('Run: Loadopiniones xhr'); 
        // Mensaje en consola para indicar que se ha recargado la vista
    });
}

//------------------------------------------------->

/*##### D #####*/
//------------------------------------------------->
function opinionesDeleteJqxhr(){
    console.log('Run: Paciente Delete Xhr')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'opiniones/opinionesDelete',
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
            opinionesViewJqxhr()
            $("#btnUpdate,#btnDelete").prop('disabled',true)
            console.info('Run: Loadopiniones xhr')        
        })
    
    console.warn(jqxhr)
}
//------------------------------------------------->