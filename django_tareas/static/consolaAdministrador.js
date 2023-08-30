function editarUsuario(idEditar)
{
    console.log(idEditar)
    fetch(`/conseguirInfoUsuario?idUsuario=${idEditar}`)
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        nombreUsuario=document.getElementById('nombreUsuario')
        apellidoUsuario=document.getElementById('apellidoUsuario')
        emailUsuario=document.getElementById('emailUsuario')
        fechaIngreso=document.getElementById('fechaIngreso')
        nroCelular=document.getElementById('nroCelular')
        profesionUsuario=document.getElementById('profesionUsuario')
        cargaId=document.getElementById('cargaId')
       
        
       
        nombreUsuario.value=data.nombreUsuario
        apellidoUsuario.value=data.apellidoUsuario
        emailUsuario.value=data.emailUsuario
        fechaIngreso.value=data.fechaIngreso
        nroCelular.value=data.celular
        profesionUsuario.value=data.profesionUsuario
        cargaId.innerHTML=data.idUsuario
        
    })

    /*
    PREGUNTA 3
    Capturar informacion del usuario desde base de datos y llenar
    inputs dentro de la ventana modal de editar usuario, permiter que
    el usuario pueda editar los datos. No olvida de cargar el ID en el innerHTML
    dentro del elemento H1 cuyo id es cargaId

    Los campos a editar son:
    Nro de celular
    Profesion del usuario

    El resto de campos:
    Nombre
    Apellido
    Email
    Fecha Ingreso
    Colocarlos como solo lectura (propiedad readonly en el tag HTML)
    
    */
}

function actualizarUsuario()
{
    url='/modificarUsuario'
    datos={
        'nroCelular':document.getElementById('nroCelular').value,
        'profesionUsuario':document.getElementById('profesionUsuario').value,
        'idUsuario':document.getElementById('cargaId').innerHTML
    }

    
    fetch(url,{
        method:"POST",
        headers:{
            "X-Requested-With":"XMLHttpRequest",
            "X-CSRFToken":getCookie("csrftoken")
        },
        body:JSON.stringify(datos)
    })
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        window.location.reload();
    })


    /*
    PREGUNTA 4
    Capturar los datos de los campos input's de la ventana de editar usuario,
    el id del usuario lo puedes capturar de la carga realizada en el elemento
    H1 cuyo id es cargaId. Con los datos capturados postearlos en la base de datos
    y actualizar la informacion del usuario
    */
}

function getCookie(name)
{
    let cookieValue = null;
    if(document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if(cookie.substring(0,name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue 
}