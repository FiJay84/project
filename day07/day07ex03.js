var name;
var age;
var gender;
var is_member;
var thirsty;
var drink_of_choice;

// 웹사이트 멤버가 아니거나 21살 이하이면, 그들을 사모님,
// 또는 사장님이라고 부르시고 정중히 클럽에 가입할 수 없다고
// 가입 요청을 거절해주세요.

// 그런 것이 아니라면, 미스터나 미스라고 이름과 함께 불러주시고,
// 웹사이트에 온 것을 환영해주세요 만약 그들이 목마르다면,
// 무슨 음료를 원하는지 prompt창을 띄워 물어봐 주세요.

// 유저의 가장 좋아하는 음료가 “우유”가 아니라면,
// “네, [이름]님 지금 즉시 [음료이름] 드리겠습니다” 라고
// 써주시고 만약 우유 라면 웹사이트에서 강퇴 시키세요.

age = prompt('몇 살?')
is_member = prompt('멤버이신가요? yes/no')
gender = prompt('남자이신가요, 여자이신가요? male/female')

if (age <= 21 || is_member === 'no') {
    if (gender === 'male') {
      alert('사장님, 가입하실 수 없습니다.')
    } else {
      alert('사모님, 가입하실 수 없습니다.')
    }
} else {
    name = prompt('성함이 어떻게 되세요?')
    if (gender === 'male') {
        alert('Mr.' + name +"님, 환영합니다.")
    }
    if (gender === 'female') {
        alert('Mrs.' + name +"님, 환영합니다.")
    }
}
if (true) {

}
