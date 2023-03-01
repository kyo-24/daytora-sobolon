$(function() {
  
  new WOW().init();
  
  // aタグ遷移
  jQuery('a[href^="#"]').on('click', function () {
  
    let header = jQuery('#header').innerHeight();
    let id = jQuery(this).attr('href');
    let position = 0;
    if (id != "#") {
      position = jQuery(id).offset().top;
    }
    jQuery('html,body').animate({
      scrollTop: position - header
    }, 300)
  });   
  
  // ハンバーガーメニュー
  jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();
  
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
  
    return false;
  });

// google formとの連携
  let $form = $('#js-form');
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp();
          $('#js-success').slideDown();
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $('#js-error').slideDown();
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on('change', function() {
    if (
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.1240466107"]').prop('checked') === true 
    ) {
      // 全て入力された時
      $submit.prop('disabled', false);
      $submit.addClass('-active');
    } else {
      // 入力されていない時
      $submit.prop('disabled', true);
      $submit.removeClass('-active');
    }
  });












});
