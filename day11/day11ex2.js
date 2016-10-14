

// var get_sentence = function() {
//   var x = Math.random();
//   var y = Math.round(x);
//   var sentence2 = "yes man ";
//   var sentence1 = "no guy ";
//   var counter = 0;
//   while (counter !== 10) {
//     if (y) {
//         console.log(sentence2);
//         $('p').append(sentence2);
//     } else {
//       console.log(sentence1);
//       $('p').append(sentence1);
//     }
//     counter++;
//     var x = Math.random();
//     var y = Math.round(x);
//   }
// }
// get_sentence();


// 여러가지 시도해보기.

var inspector = function() {
  console.log(arguments)
}

// 아래의 funtion invocation을 하나하나 해보시고 어떠한
// value가 return 되는지 생각해보세요.

inspector(3);

inspector(3 + 7);
inspector(3, 7);

inspector("hello");
inspector("hello" + " " + "how are you");
inspector("hello", "how are you");

inspector("hello", 7, true, undefined, null, 3 + 12, "nice to" + " meet you");
