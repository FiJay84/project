$('#target').on('click', function() {
  $('#target').css('color', 'red').text('boom goes the dynamitel')
})

document.querySelector('#money').addEventListener('click', function() {
    document.querySelector('#target').innerHTML = '<img src="http://animal-dream.com/data_images/money/money5.jpg">'
})

document.querySelector('#opera').addEventListener('click', function() {
    document.querySelector('#target').innerHTML = '<img src="http://animal-dream.com/data_images/money/money1.jpg">'
})


$('#target').on('mouseover', function() {
  $('#target').addClass('highlighted')
})
$('#target').on('mouseleave', function() {
  $('#target').removeClass('highlighted')
})
