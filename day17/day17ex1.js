// var say_hi = function() {
//   console.log('hi')
// };
//
// var greeter = say_hi;
//
// // say_hi();
// // greeter();
//
// say_hi = function () {
//   console.log('meg')
// }
//
// // say_hi();
// // greeter();
//
//
//
// var runner = function (fn) {
//   console.log('Invoking a function now!')
//   fn()
// };
//
// // runner( function() {console.log('okay')});
// // runner(say_hi);

answer_logger = function(x) {
  var answer = x();
  $('#answer').text(answer);
};

answer_logger(function(){
  return "I should appear in div#answer!"
});



var answer_collector = function() {
  var results_array = ra();
}










//1 answer_collerctor fucntion만들기
//2 arguemnt로는 array of function으로 받기
function answer_collector(funcs){
//3받은 arrauy of function의 아이템을 하나씩 invoke하기
//4  funcs[0]();
//5  funcs[1]();
//6  funcs[2]();
// }
//7 뭔가 계속하나씩 달라지는게 있으면 for구문이 나와야함.
  for(var i = 0; 1 < funcs.length; i++){

    var results_array = [];
    //8 그리고 invoke해서
    //8-1 funcs[i]();
    //9 그리고 invoke해서 return된 값을 results_arry에 넣어주기.
    results_array.push(funcs[i]());
    //10 result_array return해주기
    return results_array;
  }




arryOfFunctions = [w, e] function(q) {
  var results_array = q();
  $('#arrayOfFunction').text(answer_cullector);
}

var fn1 = function() {
  return "this should be the first value in results array"
};
answer_cullector([fn1, function(){
  return "this should be the second value in results array"
}]);
