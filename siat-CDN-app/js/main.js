console.log("%c Load Js S>Systems ", "font-size:30px");
console.log('Run: Main')

/*==============================================
                Error XHR jQ
==============================================*/
function xhrError(jqXHR, textStatus, errorThrown) {
    let failTxt;

    switch (jqXHR.status) {
        case 0:
            failTxt = `Not connection Verify Network [ Not Network ]. ${textStatus}`;
            break;
        case 200:
            failTxt = `Requested page Ok [200]. ${textStatus}`;
            break;
        case 404:
            failTxt = `Requested page not found [404]. ${textStatus}`;
            break;
        case 500:
            failTxt = `Internal Server Error [500]. ${textStatus}`;
            break;
        default:
            switch (errorThrown) {
                case 'parsererror':
                    failTxt = `Requested JSON parse failed [ Json Fail ]. ${textStatus}`;
                    break;
                case 'timeout':
                    failTxt = `Time out error [   ]. ${textStatus}`;
                    break;
                case 'abort':
                    failTxt = `Ajax request aborted [ XHR aborted ]. ${textStatus}`;
                    break;
                default:
                    failTxt = `Uncaught Error [ Fail ]. ${jqXHR.responseText}`;
                    break;
            }
            break;
    }

    console.log(`App: Msg XHR (AEx000002 [${failTxt}] ).`);
}
/*==============================================
                Error XHR jQ
==============================================*/

/*==============================================
                Var Empty
==============================================*/
function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
/*==============================================
                Var Empty
==============================================*/

/*==============================================
                Modal Loading
==============================================*/
function modalLoadShow(){
    new bootstrap.Modal($("#viweLoading")).show();
}
function modalLoadHide(){
    /*
        let miModal = document.getElementById('viweLoading');
        let modalInstance = bootstrap.Modal.getInstance(miModal)
            if (!modalInstance) {
            modalInstance = new bootstrap.Modal(miModal);
            }
                modalInstance.hide();   
    */
        // Obtener la referencia del modal de actualización
        const viweLoading = document.getElementById('viweLoading');
        // Obtener o crear la instancia del modal para cerrarlo correctamente
        const modalInstance2 = bootstrap.Modal.getOrCreateInstance(viweLoading);
        // Cerrar el modal después de la actualización
        modalInstance2.hide();            
}
/*==============================================
                Modal Loading
==============================================*/

function checkBoxOne() {
    let $checks = $('input[type="checkbox"]');
    $checks.click(function () {
        $checks.not(this).prop("checked", false);
    });
}

function empty(e) {
    switch (e) {
        case "":
        case 0:
        case "0":
        case null:
        case false:
        case typeof (e) == "undefined":
            return true;
        default:
            return false;
    }
}

function makeid(length) {
    let result = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
    }
    return result.join('');
}

/*==============================================
                    URLS
==============================================*/
let host      = location.href
const myArray = host.split("/")

if (myArray[2] == "localhost") {
    var dominioBase = "//localhost/server/php/siat-gob-mx-gobcom-mx/siat.gob.mx.gobcom.mx/siat.gob.mx.gobcom.mx/dashboard/"
    var urlBaseApi = dominioBase + "siat-systems-api/index.php/"
    var urlBaseApp = dominioBase + "siat-systems-app/index.php/"
    var urlBaseCdn = dominioBase + "siat-systems-cdn/siat-CDN-app/"
} else {
    var dominioBase = "siatgobcom.mx/"
    var urlBaseApi = "//api." + dominioBase
    var urlBaseApp = "//app." + dominioBase
    var urlBaseCdn = "//cdn." + dominioBase + 
}