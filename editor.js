//编辑栏
var $editor = (function() {
  var $DOM = $(''
      + '<div class="notepad-editor">'
        + '<textarea spellcheck="false"></textarea>'
      + '</div>');

  var $textArea = $DOM.find('textarea');

  function resize(isBig) {
    if(isBig) {
      $DOM.css({bottom: '21px'});
    } else {
      $DOM.css({bottom: '0'});
    }
  }

  function show() {
    $('body').append($DOM);
    $textArea.trigger('focus');
  }
  
  //改变编辑区字体样式
  function change(font,style,size){
    $textArea.css({
      fontFamily:font,
      fontSize:size
    });
    if(style == '常规'){
      $textArea.css({
        fontStyle: 'normal'
      });
    }
    if(style == '倾斜'){
      $textArea.css({
        fontStyle: 'italic'
      });
    }
    if(style == '粗体'){
      $textArea.css({
        fontWeight: 'bold'
      });
    }
    if(style == '粗偏斜体'){
      $textArea.css({
        fontWeight: 'bold',
        fontStyle: 'italic'
      });
    }
  }
  return {show: show, resize: resize, change:change};
}());
