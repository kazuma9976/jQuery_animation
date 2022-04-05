/* global $*/
$(function(){
    
  // テキストアニメーション
  const title = $('h1').text();
  //console.log(title);
  $('h1').text('');
  let count = 1;
  // text_animation関数を定義
  const text_animation = () => {
      const word = title.substr(0, count);
      // 挙動確認
      console.log(word);
      $('h1').text(word);
      count++;
      if(count > title.length) {
          clearInterval(timer);
      }
  };
  
  //タイマー処理、text_animation関数の実行(0,1秒間隔でタイピングのように文字を表示)。
  const timer = setInterval(text_animation, 100);
  
  // 経過秒数表示
  let sec = 1;
  // count_up関数の定義
  const count_up = () => {
    $('p span').text(sec);
    sec++;
  };
  
  // count_up関数の実行
  setInterval(count_up, 1000);
  
  // 画像アニメーション（fadein/fadeout）
  const images_1 = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
  let ff_count = 1;
  // opacityを使用したアニメーション。
  const fadein_fadeout = () => {
      $('#fadein_fadeout img').animate({'opacity': 0}, 1000, () => {
          $('#fadein_fadeout img').prop('src', images_1[ff_count]);
          $('#fadein_fadeout img').animate({'opacity': 1});
          ff_count++;
          if(ff_count === images_1.length){
              ff_count = 0;
          }
      });
  };
  
  // 5秒間隔で実行
  setInterval(fadein_fadeout, 5000);
  
  //画像アニメーション(slider)
  const images_2 = ['images/a.jpg', 'images/b.jpg', 'images/c.jpg'];
  $.each(images_2, (index, image) => {
        $('#slider').append($('<img>', {src: image}));
    });
    // 1番目と２番目の画像をmargin-left:-390pxの位置に設定
    $('#slider img').eq(1).css('margin-left', '-390px');
    $('#slider img').eq(2).css('margin-left', '-390px');
  
  let s_count = 0;
  // sliderの非同期処理
  const slider = () => {
        $.when(
            // 0番目の画像を、margin-left:390pxの位置に移動。
            $('#slider img').eq(s_count % 3).animate({marginLeft: '390px'}, 2000),
            // 1番目の画像を、margin-left:0pxの位置に移動。
            $('#slider img').eq((s_count + 1) % 3).animate({marginLeft: '0px'}, 2000),
            // 挙動確認
            console.log('a')
        ).done(
            () => {
                // 0番目の画像を、margin-left:-390pxの位置に移動
                $('#slider img').eq(s_count % 3).css('margin-left', '-390px');
                // 挙動確認
                console.log('b');
            }
        ).done(
            () => {
                // 次の画像の配列番号を取得するために、s_countを+1させて処理を繰り返す。
                s_count++;
                // 挙動確認
                console.log('s_count = ' + s_count);
            }
        );
    };
    
    // 5秒間隔でslider実行
    setInterval(slider, 5000);
  
});