var color;

while (color !== 'green') {

  color = prompt('green을 골라보세요 :)')



}

// while (true) {
//   color = prompt('green을 골라보세요 :)')
//   if(color === 'green'){
//     break;
//   };
// };

if (color === 'green') {
$('div').css({
  'background-color' : 'lightgreen',
  color : 'green',
  border : 'darkgreen'
})
};
