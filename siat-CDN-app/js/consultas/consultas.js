console.log('Run: Pacientes')
/*
 #############################################################################
 #                 Begin : Delete Pacientes                                  #
 #############################################################################
 Para calcular el índice de masa corporal (IMC) se utiliza la fórmula: IMC = Peso (Kg) / Estatura al cuadrado (Mt). 
Por ejemplo, si una persona pesa 64 kg y mide 1.5 m, su IMC sería: 64 / 1.5 x 1.5 = 28.44. 
*/
$(document).ready(function() {
    /*##### C #####*/
    consultaNew()
    /*##### R #####*/
    pacientesViewOneJqxhr()
    /*##### U #####*/
    //pacientesUpdate()
    /*##### D #####*/
    /*
    pacientesDelete()

    btnRefresh()
    
    btnConsultas()
    btnHistorial()
    btnRecetas()

    checkOnlyOne()
    */
    btnGuardarImprimir() 
    inputImc()
    alergias()
})

    function checkOnlyOne(){
        $("#btnUpdate,#btnDelete,#btnConsultas,#btnHistorial,#btnRecetas").prop('disabled',true)

        $(document).on('click', 'input[type="checkbox"]', function() {
            $("#btnUpdate,#btnDelete,#btnConsultas,#btnHistorial,#btnRecetas").prop('disabled',false)
            
            x = $('input[type="checkbox"]').not(this).prop('checked', false);
    
            let y = $(this).val();
    
            $("#id_advance").val(y)

            //--------------------->
            if ($('input[type="checkbox"]').is(':checked')){
                $("#uufirstName").val($("." + y + ".first").html())
                $("#uulastName").val( $("." + y + ".second").html())
                $("#uuusername").val($("." + y + ".user").html())
                $("#uupassword").val("*********")
                $("#uuemail").val($("." + y + ".email").html())
                $("#uuPhone").val($("." + y + ".nophone").html())

                $(".duFnText").html($("." + y + ".first").html())
                $(".duSnText").html($("." + y + ".second").html())
                $(".duUnText").html($("." + y + ".user").html())
                /*
            $("#user-resume,#user-update,#user-delete").attr("disabled",false)
            $("#iduserupdate").val($(this).attr("id"))
                */
            
            //readeClientesOne($('input[name="idX"]:checked').attr("id"))
    
            } else {
                $("#btnUpdate,#btnDelete,#btnConsultas,#btnHistorial,#btnRecetas").prop('disabled',true)
                clearAll()
                /*
            $("#user-resume,#user-update,#user-delete").attr("disabled",true)
            $("#iduserupdate").val(0)
            */
            }
            //--------------------->
        })
    }
    function clearAll(){
        $("#id_advance").val("")
        $("#nufirstName,#nulastName,#nuusername,#nupassword,#nuemail,#nuPhone").val("")
        $("#uufirstName,#uulastName,#uuusername,#uupassword,#uuemail,#uuPhone").val("")
        $(".duFnText , .duSnText , .duUnText").html("")
    }
    function inputImc(){
        /*
          https://codepen.io/YecJM/pen/QgorZg
          https://obesidadlopeznava.com/obesidad-y-sobrepeso-por-la-oms/
          https://codepen.io/YecJM/pen/QgorZg
            id="efPeso"
            id="efAltura"
            id="efImc"
            64 / 1.5 x 1.5 = 28.44
        */
        console.log('Run: ICM')
            $("#efPeso,#efAltura").keyup(function () {
                //alert(1)
                let efPesovalue   = $("#efPeso").val()
                let efAlturavalue = $("#efAltura").val()
                
                efAlturavalue = efAlturavalue/100 
                
                let imc = Math.round(efPesovalue/(efAlturavalue*efAlturavalue));
                let clasificacion;
                

                if (imc <= 50){
                  $("#efImc").val(imc);
                }else{}
                
                /*
                normal    18.5 - 24.9
                sobrepeso 25 -  29.9
                obesidad  30
                */
                if(imc < 18.5){
                  $("#efImc").removeClass("text-bg-warning , text-bg-success , text-bg-danger");
                }else if (imc == 18.5 || imc <= 24.9) {
                  $("#efImc").removeClass("text-bg-warning , text-bg-success , text-bg-danger").addClass("text-bg-success");
                } else if (imc == 25  || imc <= 29.9) {
                  $("#efImc").removeClass("text-bg-warning , text-bg-success , text-bg-danger").addClass("text-bg-warning");
                } else if(imc >= 30) {
                  $("#efImc").removeClass("text-bg-warning , text-bg-success , text-bg-danger").addClass("text-bg-danger");
                }else{
                  $("#efImc").removeClass("text-bg-warning , text-bg-success , text-bg-danger");
                }

                /*
                if (efPesovalue == "" || efAlturavalue == ""){
                    //alert(2)
                }else{

                    if(efAlturavalue >= 50){
                        efAlturavalue = efAlturavalue/100 
                        var valueImc = efPesovalue / (efAlturavalue * efAlturavalue);
                        $("#efImc").val(valueImc.toFixed(2));
                    //alert(3)
                    }else{
                        $("#efImc").val("");
                    //alert(4)
                    }

                }
                */
                
              });
    }
    function inputValue(){
    }
    function alergias(){

      $("#htAlergiasTxt").hide()
      
      $("#htAlergias").on( "change", function(){
        
        if($(this).val() != 'x'){
          $("#htAlergiasTxt").val("").toggle(1000)
        }else{}

      })

    }
    function printDiv() {
      
      let recetaNombre     = $("#recetaNombre").html()
      let recetaSexo       = $("#recetaSexo").html()
      let recetaNacimiento = $("#recetaNacimiento").html()
      let recetaEdad       = $("#recetaEdad").html()

      let recetaTensionArterial        = $("#efTensionArterial").val()
      let recetaFrecuenciaCardiaca     = $("#efFrecuenciaCardiaca").val()
      let recetaFrecuenciaRespiratoria = $("#efFrecuenciaRespiratoria").val()
      let recetaCirAbd                 = $("#efCirAbd").val()
      let recetaTemp                   = $("#efTemp").val()
      let recetaPeso                   = $("#efPeso").val()
      let recetaAltura                 = $("#efAltura").val()
      let recetaImc                    = $("#efImc").val()

      let recetaAlergias               = $("#htAlergias").val()
      let recetaAlergiasTxt            = $("#htAlergiasTxt").val()

      if(recetaAlergias == "no"){
        recetaAlergiasTxt2 = "negadas"
      }else{
        recetaAlergiasTxt2 = recetaAlergiasTxt
      }

      let receIndicaciones = $("#cIndicaciones").val()
      let receObservaciones = $("#cObservaciones").val()

        let divContents = $("#rReceta").val()

        let printWindow = window.open('', '', 'height=500, width=750');
        printWindow.document.open();
        printWindow.document.write(`

          <!doctype html>
          <html data-bs-theme="auto" lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <meta name="description" content>
              <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
              <meta name="generator" content="Hugo 0.122.0">
              <title>DR. Systems v. 1.0.0</title>
          
              <link href="https://getbootstrap.com/docs/5.3/examples/starter-template/" rel="canonical">
          
              <link href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" rel="stylesheet">
          
          <link href="https://getbootstrap.com/docs/5.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          
              <!-- Favicons -->
          <link href="/docs/5.3/assets/img/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
          <link type="image/png" href="/docs/5.3/assets/img/favicons/favicon-32x32.png" rel="icon" sizes="32x32">
          <link type="image/png" href="/docs/5.3/assets/img/favicons/favicon-16x16.png" rel="icon" sizes="16x16">
          <link href="/docs/5.3/assets/img/favicons/manifest.json" rel="manifest">
          <link href="/docs/5.3/assets/img/favicons/safari-pinned-tab.svg" rel="mask-icon" color="#712cf9">
          <link href="/docs/5.3/assets/img/favicons/favicon.ico" rel="icon">
          <meta name="theme-color" content="#712cf9">
           <style>
            body{transform:scale(0.9);}
            /*
            *bootstrap-print-css
            *https://github.com/coliff/bootstrap-print-css
            */
            @media print{blockquote,img,pre,tr{page-break-inside:avoid}*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}}
          </style>
            </head>
            <body>
          
              <div class="container-fluid">
                  <div class="row">
          
                      <div class="col-12 mx-auto p-0">
                          <header class="border-bottom">
                              <div class="row">
                                  <div class="col-1"><svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg></div>
                                  <div class="col-11">
                                      <h6 class="text-capitalize text-start">
                                          <p>
                                              <span class="fw-semibold">dr.habacuc flores espinoza</span><br>
                                              <span class="fw-light">medico cirujano ced.prof. 12335973</span><br>
                                              <span class="fw-light">universidad nacional autonoma de mexico</span><br>
                                          </p>
                                      </h6>
                                      <h6 class="text-capitalize text-start">
                                          <p>
                                              <span class="fw-light">Av. Adolfo López Mateos 55-b, Metropolitana 2da Secc, 57740 Cdad. Nezahualcóyotl, Méx.</span><br>
                                              <span class="fw-semibold">fecha y hora de elaboracion: </span> <span class="fw-light">01/01/2010 12:00</span>
                                          </p>
                                      </h6>                            
                                  </div>
                              </div>
                          </header>
                  
                          <main>
          
          
                  
                                      <div class="col-12">
                                          <div class="row">
                                              <div class="col-4"><h6 class="text-capitalize"><span>nombre:              </span> <span class="fw-light">${recetaNombre}</span></h6></div>
                                              <div class="col-4"></div>
                                              <div class="col-4"><h6 class="text-capitalize"><span>expediente:          </span> <span class="fw-light">00000      </span></h6></div>
                                          </div>
                                      </div>
                                      <div class="col-12">
                                          <div class="row">
                                              <div class="col-4"><h6 class="text-capitalize"><span>sexo:                </span> <span class="fw-light">${recetaSexo}</span></h6></div>
                                              <div class="col-4"><h6 class="text-capitalize"><span>edad:                </span> <span class="fw-light">${recetaEdad} años    </span></h6></div>
                                              <div class="col-4"><h6 class="text-capitalize"><span>fecha de nacimiento: </span> <span class="fw-light">${recetaNacimiento} </span></h6></div>
                                          </div>
                                      </div> 
                                      
                                      <hr>
                                      
                                      <div class="col-12">
                                          <div class="row">
                  
                                              <div class="col-4">
                                                  <div class="row">
                                                      <div class="col-6">
                                                          <ul class="list-group list-group-flush">
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>t.a.              </span> <span class="fw-light">${recetaTensionArterial} mm/Hg     </span></h6></li>
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>f.c.              </span> <span class="fw-light">${recetaFrecuenciaCardiaca} x min  </span></h6></li>
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>f.r.              </span> <span class="fw-light">${recetaFrecuenciaRespiratoria} x min  </span></h6></li>
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>circun. abdom.    </span> <span class="fw-light">${recetaCirAbd} cm     </span></h6></li>
                                                          </ul>
                                                      </div> 
                                                      <div class="col-6">
                                                          <ul class="list-group list-group-flush">
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>temp.              </span> <span class="fw-light">${recetaTemp} c° </span></h6></li>
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>peso               </span> <span class="fw-light">${recetaPeso} kg </span></h6></li>
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>talla              </span> <span class="fw-light">${recetaAltura} cm </span></h6></li>
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>imc                </span> <span class="fw-light">${recetaImc} kg/m2 </span></h6></li>
                                                          </ul>
                                                      </div> 
                  
                                                      <div class="col-12">
                                                          <ul class="list-group list-group-flush">
                                                              <li class="list-group-item"><h6 class="text-capitalize"><span>alergias              </span> <span class="fw-light">${recetaAlergiasTxt2}</span></h6></li>
                                                          </ul>
                                                      </div> 
                  
                                                  </div>
                                              </div>   
                  
                                              <div class="col-8">
                                                  <h6 class="text-uppercase">tratamiento</h6>
                                              
                                                  <table class="table">
                                                      <thead>
                                                      <tr>
                                                          <th class="text-start  text-capitalize" scope="col">#</th>
                                                          <th class="text-start  text-capitalize" scope="col">medicamento</th>
                                                          <th class="text-center text-capitalize" scope="col">tomar</th>
                                                          <th class="text-center text-capitalize" scope="col">horas</th>
                                                          <th class="text-center text-capitalize" scope="col">dias</th>
                                                      </tr>
                                                      </thead>
                                                      <tbody>
                                                          <tr>
                                                              <th scope="row">1</th>
                                                              <td class="text-start fw-semibold">Naproxeno 275.0 MG Paracetamol 300.0 MG</td>
                                                              <td class="text-center">1 pz</td>
                                                              <td class="text-center">8</td>
                                                              <td class="text-center">5</td>
                                                          </tr>
                  
                                                          <tr>
                                                              <th scope="row">1</th>
                                                              <td class="text-start fw-semibold">Naproxeno 275.0 MG Paracetamol 300.0 MG</td>
                                                              <td class="text-center">1 pz</td>
                                                              <td class="text-center">8</td>
                                                              <td class="text-center">5</td>
                                                          </tr>                                
                  
                                                          <tr>
                                                              <th scope="row">1</th>
                                                              <td class="text-start fw-semibold">Naproxeno 275.0 MG Paracetamol 300.0 MG</td>
                                                              <td class="text-center">1 pz</td>
                                                              <td class="text-center">8</td>
                                                              <td class="text-center">5</td>
                                                          </tr>   
          
                                                          <tr>
                                                              <th scope="row">1</th>
                                                              <td class="text-start fw-semibold">Naproxeno 275.0 MG Paracetamol 300.0 MG</td>
                                                              <td class="text-center">1 pz</td>
                                                              <td class="text-center">8</td>
                                                              <td class="text-center">5</td>
                                                          </tr>                                                  
                                                      </tbody>
                                                  </table>            
                                              </div>                    
                  
                                          </div>
                                      </div> 
                  
                                      <hr>
                  
                                      <div class="col-12">
                                          <div class="row">
                                              <div class="col-6">
                                                  <h6 class="text-capitalize">
                                                      <span>indicaciones generales.</span><br>
                                                      <span class="fw-light">${receIndicaciones}</span>
                                                  </h6>
                                              </div>
                                              
                                              <div class="col-6">
                                                  <h6 class="text-capitalize">
                                                      <span>observaciones.</span><br>
                                                      <span class="fw-light">${receObservaciones}</span>
                                                  </h6>
                                              </div>
                                          </div>
                                      </div> 
                  
          
          
                          </main>
                  
                          <footer class="text-body-secondary border-top pt-4">
                              <h6 class="text-capitalize">
                                  <p>
                                      <span class="fw-semibold">favor de tomar el tratamiento completo.</span><br>
                                      <span class="fw-light">favor de presentar esta receta en su proxima cita.</span>
                                  </p>
                              </h6>
                          </footer>
                  
                      </div>
          
                  </div>
              </div>
          
          
          
              <svg class="d-none" xmlns="http://www.w3.org/2000/svg">
                  <symbol id="check2" viewBox="0 0 16 16">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                  </symbol>
                  <symbol id="circle-half" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                  </symbol>
                  <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                  </symbol>
                  <symbol id="sun-fill" viewBox="0 0 16 16">
                  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                  </symbol>
              </svg>
          
              <svg class="d-none" xmlns="http://www.w3.org/2000/svg">
              <symbol id="arrow-right-circle" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
              </symbol>
              <symbol id="bootstrap" viewBox="0 0 118 94">
              <title>Bootstrap</title>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
              </symbol>
              </svg>
              
              <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
              </body>
          </html>
               
    
   
        `);
        printWindow.document.close();
        printWindow.print();

    }