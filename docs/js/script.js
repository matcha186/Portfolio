// slick関連
$(function () {
  $(".slider").slick({
    autoplay: true,
    dots: true,
    prevArrow: '<button class="arrow-common arrow-prev"></button>',
    nextArrow: '<button class="arrow-common arrow-next"></button>',
  });
});

$(document).ready(function(){
  var music_captions = [
      "画像1の説明",
      "画像2の説明",
      "画像3の説明",
      "画像4の説明",
      "画像5の説明"
  ];

  $('.music-slider').on('afterChange', function(event, slick, currentSlide){
      $('#music-slide-caption').html(music_captions[currentSlide]);
  });
});

$(document).ready(function(){
  var game_captions = [
      "卒業制作にて制作したRPGゲーム。<br>卒業制作展で学科賞を受賞した。<br><span class='codec'>(Unity, C#)</span>",
      "某YouTuberが作成したアナログゲームを<br>デジタル化したダイスゲーム。<br><span class='codec'>(HTML, CSS, JavaScript)</span>",
      "星を繋いで自分だけの<br>アートを作成できるゲーム。<br><span class='codec'>(Scratch)</span>",
      "落ちてくるトゲを避けて<br>高得点を目指すゲーム。<br><span class='codec'>(Scratch)</span>"
  ];

  $('.game-slider').on('afterChange', function(event, slick, currentSlide){
      $('#game-slide-caption').html(game_captions[currentSlide]);
  });
});

// ナビゲーションバーのスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var header = $('nav').height();
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - header;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// 他のaudioが流れたら今流れているものを止める
document.addEventListener("DOMContentLoaded", function () {
  const audioElements = document.querySelectorAll("audio");

  audioElements.forEach(audio => {
      audio.addEventListener("play", function () {
          audioElements.forEach(otherAudio => {
              if (otherAudio !== audio) {
                  otherAudio.pause();
              }
          });
      });
  });
});