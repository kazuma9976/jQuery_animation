/* global $*/
$(function(){
    
  // テキストアニメーション
  const title = $('h1').text();
  //console.log(title);
  $('h1').text('');
  let count = 1;
  // テキストアニメーションの関数を定義
  const text_animation = () => {
      const word = title.substr(0, count);
      console.log(word);
      $('h1').text(word);
      count++;
      if(count > title.length) {
          clearInterval(timer);
      }
  };
  //text_animation();
  //タイマー処理
  const timer = setInterval(text_animation, 100);
  
  // 経過秒数表示
  let sec = 1;
  const count_up = () => {
    $('p span').text(sec);
    sec++;
   
  };
  setInterval(count_up, 1000);
  
  // 画像アニメーション1（fadein/fadeout）
  const images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
  
  let ff_count = 1;
  
  const fadein_fadeout = () => {
      $('#fadein_fadeout img').animate({'opacity': 0}, 1000, () => {
          $('#fadein_fadeout img').prop('src', images[ff_count]);
          $('#fadein_fadeout img').animate({'opacity': 1});
          ff_count++;
          if(ff_count === images.length){
              ff_count = 0;
          }
      });
  };
  
  setInterval(fadein_fadeout, 5000);
  
  //画像アニメーション(slider)
  $.each(images, (index, image) => {
        $('#slider').append($('<img>', {src: image}));
    });
    
    $('#slider img').eq(1).css('margin-left', '-500px');
    $('#slider img').eq(2).css('margin-left', '-500px');
  
  let s_count = 0;
  
  const slider = () => {
        $.when(

            $('#slider img').eq(s_count % 3).animate({marginLeft: '500'}, 2000),
            $('#slider img').eq((s_count + 1) % 3).animate({marginLeft: '0px'}, 2000),
            console.log('a')
        ).done(
            () => {
                $('#slider img').eq(s_count % 3).css('margin-left', '-500px');
                console.log('b');
            }
        ).done(
            () => {
                s_count++;
                console.log('s_count = ' + s_count);
            }
        );
    };
    
    setInterval(slider, 5000);
  
});