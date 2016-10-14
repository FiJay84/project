// posts안에 array형식의 data들어가기.
var posts = [];

// ///////////////
// exercise1
// ///////////////
//
var post = {
  // url 주소
  url: 'http://jsonplaceholder.typicode.com/posts/',

  // body안에 div class=post를 넣음
  $el: $('<div class="post">').appendTo($('body')),

  // initialize: id를 argument로 갖고있는 function을 실행함.
  initialize: function(id) {

    //post.$el에 id에  id값을 넣음.
    this.$el.attr('id', id);

    //post.url에 id값을 추가해서 실행함.
    this.url += id

    // post를 thisPost에 저장함.
    var thisPost = this

    // post.url을 요청하고
    $.get(this.url, function(data) {

      //this를 보여줌.
      console.log(this);

      //data를 post의 attributes에 넣어주고
      thisPost.attributes = data;

      // post의 render를 실행함.
      thisPost.render();
    })

    // posts array에  this넣어줌.
    posts.push(this);
  },

  // render라는 method는
  render: function() {

    // post.$el에
    this.$el.append([

      // <div class='title'>에 post.attributes.title를 넣어줌.
      $('<div>').addClass('title').text(this.attributes.title),

      // <div class='body'에 post.attribute.body를 넣어줌.
      $('<div>').addClass('body').text(this.attributes.body)
    ])
  }
}
// post.initialize(1);

/////////////////
// exercise2
/////////////////

function post_factory(id) {
  post.initialize(id);
  }

for (i = 75; i < 90; i++) {
    this.fetch();
    this.render();
}
post.highlight = {
  this.active = true;
  $('.highlight').attendTo('$el')
}
if (active === true) {
  background-color: yellow,
  text-color: red
}

post.highlight()
