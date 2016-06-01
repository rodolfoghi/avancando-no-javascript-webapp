var $newCard = document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-action');

$newCardContent.addEventListener('input', function(){
  var $error = document.querySelector('.error');
  if ($error != null) {
    $error.remove();
  };
});

$newCard.addEventListener('submit', function(event) {
  event.preventDefault();

  if ($newCardContent.value == '') {
    if(document.querySelector('.error') == null) {
      var $error = document.createElement('span');
      $error.textContent = 'Por favor, preencha o campo a cima.';
      $error.classList.add('error');
      $newCard.insertBefore($error, $newCardAction);
    };
  } else {
    $wrapCard = document.querySelector('.wrap-card');
    $card = document.querySelector('.card');
    $copyCard = $card.cloneNode(true);
    $copyCard.querySelector('.card-content').textContent = $newCardContent.value;

    $wrapCard.insertBefore($copyCard, $card);
  };


});
