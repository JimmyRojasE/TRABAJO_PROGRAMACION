$.get('http://127.0.0.7:5500/Paginas/Paginas_jquery/galeria_json.json',
function(resultado){
  let contenido='<div class="card-deck mt-3"> '
  for (let i = 0; i <resultado.Productos.length;i++){
    contenido +=
    `<div class="col-md-3 mt-3" >
          <div class="card text-center" style="width: 18rem; height:530px;" >
              <div class="card-header" >
                <img class="card-img-top" src=${resultado.Productos[i].imagen} alt="Card image cap" style="width:253px; height:200px;">
              </div>
              <div class="card-body" >
                <h5 class="card-title">${resultado.Productos[i].nombre_producto}</h5>
                <p class="card-text">${resultado.Productos[i].autor}</p>
                <p class="card-text">${resultado.Productos[i].descripcion}</p>
                
              </div>
              <div class="card-footer text-center" >
                <a href=${resultado.Productos[i].pagina_login} class="btn btn-primary">VER PRODUCTO</a>
              </div>
          </div>
      </div>
    `;
  }
  contenido +='</div>'
  $("#cardjquery").html(contenido)
}
);