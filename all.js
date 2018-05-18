$(function(){
  
  $('.title_2').on('click', function(){
    $('.qa').slideToggle();
  });

});

$(function(){
  
  $('.title_3').on('click', function(){
    $('.ask').slideToggle();
  });

});

$(function(){
  
  $('.title_3').on('click', function(){
    $('.reply').slideToggle();
  });

});

function reset() {
    var subject = document.getElementById('subject');
    var con = document.getElementById('con');

    if (!subject.value || subject.value != subject.defaultValue && confirm('確定要送出這則訊息嗎？ 審核及回覆時間約7-14天。')) {
        subject.value = subject.defaultValue;
    }
    if (!con.value || con.value != con.defaultValue && confirm('確定要送出這則訊息嗎？ 審核及回覆時間約7-14天。')) {
        con.value = con.defaultValue;
    }
}

function reset2() {
    var subject = document.getElementById('subject');
    var con = document.getElementById('con');

    if (!subject.value || subject.value != subject.defaultValue && confirm('Are you sure you want to send this message? The review and response time is about 7-14 days.')) {
        subject.value = subject.defaultValue;
    }
    if (!con.value || con.value != con.defaultValue && confirm('Are you sure you want to send this message? The review and response time is about 7-14 days.')) {
        con.value = con.defaultValue;
    }
}