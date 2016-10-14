// 여러분은 이제 Function expression을 만들수 있습니다.

var fn = function () {
  console.log('heeey')
}

// invoke할 줄 앎.
fn();

// 이제 새로운 것 배워봅시다.
// 유저가  HTML element를 클릭하면 function이 invoke 되도록.

// 아래 코드의 'fn' function 을 event handler라고 합니다.
// 무엇을 하는 코드일지 생각해보세요.
document.querySelector('#target').addEventListener('click', fn)

// 아래 코드처럼 event handler로 variable 안에 들어있는 function을 사용하는 거 보다
// 이름없는 function 자체를 넣어 사용하는 경우가 많습니다.
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal')
});



// button click
var counter = 0;
document.querySelector('button').addEventListener('click', function() {
  document.querySelector('#target').textContent = 'Beeeeep' + counter;
})
while(counter < 100){
  counter++
}
$('<button>Button</button>')
.appendTo('#target')
.css('background-color', 'red')
.text('HI')
.on('click', function()
{$('button').text('asdfasdf')})
.on('focus', function(){console.log('hihi')})
.on('mouseenter', function(){console.log('mouseenter')})
// .css('background-color', 'black')})

// #target 안에
// beep text 넣기
