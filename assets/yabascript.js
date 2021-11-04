//  ~~~JS Programado por Fantanchero~~~



var nombreUsuario;

//Zendesk Client
var client = ZAFClient.init();
      client.invoke("resize", { width: "100%", height: "600px" });
      
      client.on("app.registered", function(e) {

        // TRAER EL NOMBRE DE USUARIO

        client.get('ticket.requester.name').then(function(data) {
          window.nombreUsuario=data["ticket.requester.name"].toString()
        });

      });






// Funciones

function cargarPlantilla(){

    //Limpieza de div de plantilla
    var divv = document.getElementById("plantilla");
    divv.setAttribute("class", "border border-success");
    divv.innerHTML="";

    //Carga de plantilla seleccionada en variable
    var tipoPlantilla= document.getElementById("listaPlantillas");
    var plantillaSeleccionada= tipoPlantilla.value;
    
    //Switch Condicional

    switch (plantillaSeleccionada){
        case "1":
            
            var elemento1=document.createElement("textarea");
            elemento1.setAttribute("class","form-control");
            elemento1.setAttribute("disabled","false");
            elemento1.setAttribute("rows", "4");
            elemento1.setAttribute("id","txtMensaje");
            var textoMensaje="Gracias "+nombreUsuario+" por comunicarte con Vopero. A continuacion el primer operador disponible se pondra en contacto con usted.";
            elemento1.innerHTML=textoMensaje;
            divv.appendChild(elemento1);
            var nodoBr1=document.createElement("br");
            divv.appendChild(nodoBr1);

            var elemento2=document.createElement("label");
            elemento2.setAttribute("for","nombrePersona");
            elemento2.innerHTML="Nombre de Persona";

            var elemento3=document.createElement("input");
            elemento3.setAttribute("class","form-control");
            elemento3.setAttribute("type","text");
            elemento3.setAttribute("id","inputNombrePersona");
            elemento3.setAttribute("placeholder",nombreUsuario);
            elemento3.setAttribute("oninput","cambiarNombre()");
            
            divv.appendChild(elemento2);
            divv.appendChild(elemento3);
            var nodoBr2=document.createElement("br");
            divv.appendChild(nodoBr2);
            
            var elemento4=document.createElement("button");
            elemento4.setAttribute("class","btn btn-danger btn-bg");
            elemento4.setAttribute("onclick", "mensajeEnviado()");
            elemento4.innerHTML="Enviar Mensaje";
            
            divv.appendChild(elemento4);
    
        break;

        case "2":
            var elemento1=document.createElement("textarea");
            elemento1.setAttribute("class","form-control");
            elemento1.setAttribute("disabled","false");
            elemento1.setAttribute("rows", "4");
            elemento1.setAttribute("id","txtMensaje");
            var producto="Zapatillas Puma";
            var productoTexto="Lamentablemente de ese producto no hay Stock. Podemos ofrecerte "+producto;
            var textoMensaje="Gracias "+nombreUsuario+" por comunicarte con Vopero."+ productoTexto;
            elemento1.innerHTML=textoMensaje;
            divv.appendChild(elemento1);
            var nodoBr1=document.createElement("br");
            divv.appendChild(nodoBr1);

            var elemento2=document.createElement("label");
            elemento2.setAttribute("for","inputNombrePersona");
            elemento2.innerHTML="Nombre de Persona";

            var elemento3=document.createElement("input");
            elemento3.setAttribute("class","form-control");
            elemento3.setAttribute("type","text");
            elemento3.setAttribute("id","inputNombrePersona");
            elemento3.setAttribute("placeholder",nombreUsuario);
            elemento3.setAttribute("oninput","cambiarNombre()");

            var elemento4=document.createElement("label");
            elemento4.setAttribute("for","inputNombreProducto");
            elemento4.innerHTML="Producto";

            var elemento5=document.createElement("input");
            elemento5.setAttribute("class","form-control");
            elemento5.setAttribute("type","text");
            elemento5.setAttribute("id","inputNombreProducto");
            elemento5.setAttribute("placeholder",producto);
            elemento5.setAttribute("oninput","cambiarProducto()");
            
            divv.appendChild(elemento2);
            divv.appendChild(elemento3);
            divv.appendChild(elemento4);
            divv.appendChild(elemento5);

            var nodoBr2=document.createElement("br");
            divv.appendChild(nodoBr2);
            
            var elemento6=document.createElement("button");
            elemento6.setAttribute("class","btn btn-danger btn-bg");
            elemento6.setAttribute("onclick", "mensajeEnviado()");
            elemento6.innerHTML="Enviar Mensaje";
            
            divv.appendChild(elemento6);
        break;

        case "3":
            var elemento1=document.createElement("textarea");
            elemento1.setAttribute("class","form-control");
            elemento1.setAttribute("disabled","false");
            elemento1.setAttribute("rows", "4");
            elemento1.setAttribute("id","txtMensaje");
            var textoMensaje="Gracias "+nombreUsuario+" por comunicarte con Vopero. Si tienes dudas del proceso puedes revisar la siguiente guia: www.guiavopero.com";
            elemento1.innerHTML=textoMensaje;
            divv.appendChild(elemento1);
            var nodoBr1=document.createElement("br");
            divv.appendChild(nodoBr1);

            var elemento2=document.createElement("label");
            elemento2.setAttribute("for","inputNombrePersona");
            elemento2.innerHTML="Nombre de Persona";

            var elemento3=document.createElement("input");
            elemento3.setAttribute("class","form-control");
            elemento3.setAttribute("type","text");
            elemento3.setAttribute("id","inputNombrePersona");
            elemento3.setAttribute("placeholder",nombreUsuario);
            elemento3.setAttribute("oninput","cambiarNombreInfo()");
            
            divv.appendChild(elemento2);
            divv.appendChild(elemento3);
            var nodoBr2=document.createElement("br");
            divv.appendChild(nodoBr2);
            
            var elemento4=document.createElement("button");
            elemento4.setAttribute("class","btn btn-danger btn-bg");
            elemento4.setAttribute("onclick", "mensajeEnviado()");
            elemento4.innerHTML="Enviar Mensaje";
            
            divv.appendChild(elemento4);
        break;

        case "4":
            var elemento1=document.createElement("textarea");
            elemento1.setAttribute("class","form-control");
            elemento1.setAttribute("disabled","false");
            elemento1.setAttribute("rows", "4");
            elemento1.setAttribute("id","txtMensaje");
            var textoMensaje="Gracias "+nombreUsuario+" por comunicarte con Vopero. Puedes encontrarnos en instagram @Vopero, en Facebook @Vopero.";
            elemento1.innerHTML=textoMensaje;
            divv.appendChild(elemento1);
            var nodoBr1=document.createElement("br");
            divv.appendChild(nodoBr1);

            var elemento2=document.createElement("label");
            elemento2.setAttribute("for","inputNombrePersona");
            elemento2.innerHTML="Nombre de Persona";

            var elemento3=document.createElement("input");
            elemento3.setAttribute("class","form-control");
            elemento3.setAttribute("type","text");
            elemento3.setAttribute("id","inputNombrePersona");
            elemento3.setAttribute("placeholder",nombreUsuario);
            elemento3.setAttribute("oninput","cambiarNombreContacto()");
            
            divv.appendChild(elemento2);
            divv.appendChild(elemento3);
            var nodoBr2=document.createElement("br");
            divv.appendChild(nodoBr2);
            
            var elemento4=document.createElement("button");
            elemento4.setAttribute("class","btn btn-danger btn-bg");
            elemento4.setAttribute("onclick", "mensajeEnviado()");
            elemento4.innerHTML="Enviar Mensaje";
            
            divv.appendChild(elemento4);
        break;

        case "5":
            var elemento1=document.createElement("textarea");
            elemento1.setAttribute("class","form-control");
            elemento1.setAttribute("disabled","false");
            elemento1.setAttribute("rows", "4");
            elemento1.setAttribute("id","txtMensaje");
            
            var codigo=nombreUsuario.split(" ")[0]+"invita!";
            var textoMensaje="Oye "+nombreUsuario+" ! Invitando a un amigo obtienes 10% off en tu proxima compra y tu amigo tambien. Usa el siguiente codigo: "+codigo;
            elemento1.innerHTML=textoMensaje;
            divv.appendChild(elemento1);
            var nodoBr1=document.createElement("br");
            divv.appendChild(nodoBr1);

            var elemento2=document.createElement("label");
            elemento2.setAttribute("for","nombrePersona");
            elemento2.innerHTML="Codigo:";

            var elemento3=document.createElement("input");
            elemento3.setAttribute("class","form-control");
            elemento3.setAttribute("type","text");
            elemento3.setAttribute("id","inputNombrePersona");
            elemento3.setAttribute("placeholder",codigo);
            elemento3.setAttribute("oninput","cambiarCodigo()");
            
            divv.appendChild(elemento2);
            divv.appendChild(elemento3);
            var nodoBr2=document.createElement("br");
            divv.appendChild(nodoBr2);
            
            var elemento4=document.createElement("button");
            elemento4.setAttribute("class","btn btn-danger btn-bg");
            elemento4.setAttribute("onclick", "mensajeEnviado()");
            elemento4.innerHTML="Enviar Mensaje";
            
            divv.appendChild(elemento4);
        break;

        case "6":
            var elemento1=document.createElement("textarea");
            elemento1.setAttribute("class","form-control");
            elemento1.setAttribute("disabled","false");
            elemento1.setAttribute("rows", "4");
            elemento1.setAttribute("id","txtMensaje");
            
            var codigo=nombreUsuario.split(" ")[0].slice(0,4)+"-50OFF-"+nombreUsuario.split(" ")[0].slice(4);
            var textoMensaje="Oye "+nombreUsuario+" ! Ganaste un cupon de 50% para tu proxima compra. Usalo con el siguiente codigo: "+codigo;
            elemento1.innerHTML=textoMensaje;
            divv.appendChild(elemento1);
            var nodoBr1=document.createElement("br");
            divv.appendChild(nodoBr1);

            var elemento2=document.createElement("label");
            elemento2.setAttribute("for","nombrePersona");
            elemento2.innerHTML="Nombre de Persona";

            var elemento3=document.createElement("input");
            elemento3.setAttribute("class","form-control");
            elemento3.setAttribute("type","text");
            elemento3.setAttribute("id","inputNombrePersona");
            elemento3.setAttribute("placeholder",nombreUsuario);
            elemento3.setAttribute("oninput","cambiarCodigo50()");
            
            divv.appendChild(elemento2);
            divv.appendChild(elemento3);
            var nodoBr2=document.createElement("br");
            divv.appendChild(nodoBr2);
            
            var elemento4=document.createElement("button");
            elemento4.setAttribute("class","btn btn-danger btn-bg");
            elemento4.setAttribute("onclick", "mensajeEnviado()");
            elemento4.innerHTML="Enviar Mensaje";
            
            divv.appendChild(elemento4);
        break;

    }

    
    
    
}

function cambiarNombre(){
    nombrePersona=document.getElementById("inputNombrePersona").value.toString();
    textoMensaje="Gracias "+nombrePersona+" por comunicarte con Vopero. A continuacion el primer operador disponible se pondra en contacto con usted.";
    document.getElementById("txtMensaje").innerHTML=textoMensaje;
}

function mensajeEnviado(){

    //ZENDESK MENSAJE INTERNO
    client.set('comment.type', "internalNote");
    client.set('comment.text', document.getElementById("txtMensaje").value.toString());    

    var divv = document.getElementById("plantilla");
    divv.innerHTML="";
    client.invoke('notify', "Mensaje Enviado", "notice");
}

function cambiarProducto(){
    producto=document.getElementById("inputNombreProducto").value.toString();
    textoMensaje="Gracias "+nombrePersona+" por comunicarte con Vopero. Lamentablemente de ese producto no hay Stock. Podemos ofrecerte "+producto;
    document.getElementById("txtMensaje").innerHTML=textoMensaje;
}

function cambiarNombreInfo(){
    nombrePersona=document.getElementById("inputNombrePersona").value.toString();
    var textoMensaje="Gracias "+nombrePersona+" por comunicarte con Vopero. Si tienes dudas del proceso puedes revisar la siguiente guia: www.guiavopero.com";
    document.getElementById("txtMensaje").innerHTML=textoMensaje;
}

function cambiarNombreContacto(){
    nombrePersona=document.getElementById("inputNombrePersona").value.toString();
    var textoMensaje="Gracias "+nombrePersona+" por comunicarte con Vopero. Puedes encontrarnos en instagram @Vopero, en Facebook @Vopero.";
    document.getElementById("txtMensaje").innerHTML=textoMensaje;
}

function cambiarCodigo(){
    codigo=document.getElementById("inputNombrePersona").value.toString();
    var textoMensaje="Oye "+nombrePersona+" ! Invitando a un amigo obtienes 10% off en tu proxima compra y tu amigo tambien. Usa el siguiente codigo: "+codigo;
    document.getElementById("txtMensaje").innerHTML=textoMensaje;
}

function cambiarCodigo50(){
    nombrePersona=document.getElementById("inputNombrePersona").value.toString();
    var codigo=nombrePersona.split(" ")[0].slice(0,4)+"-50OFF-"+nombrePersona.split(" ")[0].slice(4);
    var textoMensaje="Oye "+nombrePersona+" ! Ganaste un cupon de 50% para tu proxima compra. Usalo con el siguiente codigo: "+codigo;
    document.getElementById("txtMensaje").innerHTML=textoMensaje;
}

