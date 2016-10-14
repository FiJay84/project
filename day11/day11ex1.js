var dating = function (x) {
  console.log("2016-10-04");
}

dating()
dating()
dating()
dating()

$('.dating').append(dating)


var greeter = function () {
  return 'hello'
}

// return된 value를 저장하기.
var greeting = greeter()

// greeting variable은 어떠한 value를 가지고 있나요?

// 저장된 value를 사용하여 expression 만들기.
console.log(greeting + ", nice to meet you.");

// 아래 코드 외 위의 코드가 다른 점이 있나요?
console.log(greeter() + ", nice to meet you.");


var saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz."
  console.log(phrase);
  return phrase
}

// return된 value는 무엇인가요?
var saying = saying_generator()

var broken_saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz.1"
  phrase
  console.log(phrase);
}

// 지금은요?
var broken_saying = broken_saying_generator()
  console.log(phrase);
