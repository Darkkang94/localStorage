  let listado=[];

if (localStorage.getItem('listado')){
   listado=JSON.parse(localStorage.getItem('listado'));
   for (item of listado){
      $('ul').append('<li>'+item+'</li>');
   }
}

$('#envio').click(function(e){
  e.preventDefault();
  let datos=$('#item1').val()+' '+$('#item2').val()+' '+$('#item3').val();
  $('ul').append('<li>'+datos+'</li>');
  $('#item1').val('');
  $('#item2').val('');
  $('#item3').val('');
  listado.push(datos);
  localStorage.setItem('listado', JSON.stringify(listado));
});

$('#clear').click(function(e){
  $('ul').empty('listado');
  localStorage.removeItem('listado');
  $('h2').html('</br>El texto ha sido limpiado');
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Formulario'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Esta página ha cargado el ' + new Date().toLocaleString()
  }
})