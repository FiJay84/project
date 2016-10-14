var n = 49;
var counter = 0;
var string = '';

// counter가 홀수면 'odd' class 주기
// counter가 짝수면 'even' class 주기

while ( counter <= n ) {
    if ( counter != n ) {
        if ( counter % 2 === 0) {
            string = string + '<p class="even">' + counter + '</p>' + '<hr>';
        } else {
            string = string + '<p class="odd">' + counter + '</p>'
        }
    }
    counter += 1;
}


document.querySelector("#target").innerHTML= string;
