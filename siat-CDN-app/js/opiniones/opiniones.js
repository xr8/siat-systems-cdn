console.log('Run: Pacientes')
/*
 #############################################################################
 #                 Begin : Delete Pacientes                                  #
 #############################################################################
*/
$(document).ready(function() {
    /*##### C #####*/
    opinionesNew()
    /*##### R #####*/
    opinionesViewJqxhr()
    /*##### U #####*/
    opinionesUpdate()
    /*##### D #####*/
    opinionesDelete()

    btnRefresh()
    checkOnlyOne()
})

    function checkOnlyOne(){
        $("#btnUpdate,#btnDelete").prop('disabled',true)

        $(document).on('click', 'input[type="checkbox"]', function() {
            
            //Habilita (activa) dos botones que estaban deshabilitados.
            $("#btnUpdate,#btnDelete").prop('disabled',false)
            
            //Desmarca todos los checkboxes excepto el que acaba de activarse. Es un comportamiento típico cuando quieres que varios checkboxes se comporten como radio buttons (solo uno marcado a la vez).
            x = $('input[type="checkbox"]').not(this).prop('checked', false);
    
            let y = $(this).val();
            console.log('y:',y)
            console.log($("#id_advance").val(y))

            //--------------------->
            if ($('input[type="checkbox"]').is(':checked')){

                $("#uuDato1").val($("." + y + ".d1").html())
                $("#uuDato2").val($("." + y + ".d2").html())
                $("#uuDato3").val($("." + y + ".d3").html())
                $("#uuDato4").val($("." + y + ".d4").html())
                $("#uuDato5").val($("." + y + ".d5").html())
                $("#uuDato6").val($("." + y + ".d6").html())

                $(".duFnText").html($("." + y + ".d3").html())
                $(".duSnText").html($("." + y + ".d4").html())

            } else {
                $("#btnUpdate,#btnDelete").prop('disabled',true)
                clearAll()
            }
            //--------------------->
        })
    }
    function clearAll(){
        $("#id_advance").val("")
        $("#nuDato1,#nuDato2,#nuDato3,#nuDato4,#nuDato5,#nuDato6").val("")
        $("#uuDato1,#uuDato2,#uuDato3,#uuDato4,#uuDato5,#uuDato6").val("")
        $(".duFnText , .duSnText").html("")
    }