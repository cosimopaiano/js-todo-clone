/**
*Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
  Usiamo i template in html e il clone per separare la parte logica (JS) dalla parte di markup (HTML)
  recap funzionalità: mostrare, aggiungere e eliminare elementi dalla lista

*/
$(document).ready(function (){

  // Sorgente decoration
  var todoItems = [
    'fare la spesa',
    'portare gatto dal vet',
    'comprare pc nuovo',
    'lavare la macchina',
    'pagare le bollette'
  ];

  // Referenze
  var list = $('.todo');
  var newInput = $('.add-element');

  for (var i = 0; i < todoItems.length; i++){
    // Clonazione del template
    var elementList = $('.template li').clone();

    //aggiunta testo dinamico al template
    elementList.prepend(todoItems[i]);

    // Aggounta clone alla lista
    list.append(elementList);
  }

  // Rimozione todo items con l'uso di ON
  $('body').on('click', '.todo li i', function(){
    $(this).parent().remove();

  });

  // Aggiunta di un nuovo list item
  newInput.keyup(function(e){
    console.log(e.which, e.keyCode);

    if(e.which == 13 || e.keyCode == 13){
      var text = newInput.val().trim();
      console.log(text);

      if(text !== ''){
        var elementNew = $('.template li').clone();
        elementNew.prepend(text);
        list.append(elementNew);

        // Clear dell'input
        newInput.val('');
      }
    }

  });

  // Rendi todo item completo / da completare
  $('body').on('click', '.todo li i', function(){
    $(this).toggleClass('completed');
  });




// Chiusura document ready
});
