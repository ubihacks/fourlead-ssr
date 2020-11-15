// expand height auto according to the text
function expanttextarea(tarea) {
    console.log(tarea);
    var textarea = document.querySelector(tarea);

    textarea.addEventListener('keydown', autosize);

    function autosize() {
        var el = this;
        setTimeout(function () {
            el.style.cssText = 'height:auto !important; padding: 25px 12px 0px';
            // for box-sizing other than "content-box" use:
            // el.style.cssText = '-moz-box-sizing:content-box';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 0);
    }
}


$(".bahaviour-wrap1").click(function () {
    $(this).toggleClass("active");
});
$(".bahaviour-wrap2").click(function () {
    $(this).toggleClass("active");
});
$(".bahaviour-wrap3").click(function () {
    $(this).toggleClass("active");
});
$(".bahaviour-wrap4").click(function () {
    $(this).toggleClass("active");
});

$("#frequently-des").click(function () {
    $(".frequently-wrap .addition-address-wrap.addition-frequently-wrap").toggleClass("freq-btn");
});
$(".add-headquater .menu .item").click(function () {
    $(".add-headquater .addition-address-wrap.addition-frequently-wrap").removeClass("freq-btn");
});
$(".add-headquater .menu .item:last-child").click(function () {
    $(".add-headquater .addition-address-wrap.addition-frequently-wrap").addClass("freq-btn");
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
      $(".main-header-wrap").addClass("headerlight");
  } else {
      $(".main-header-wrap").removeClass("headerlight");
  }
})

$(document).ready(function () {
  setTimeout(function () {

  }, 2000);
})

$(document).ajaxComplete(function () {
  setTimeout(function () {

  }, 2000);
});

$(document).ready(function () {
  setTimeout(function () {

  }, 1000);
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
      $(".main-header-wrap").addClass("headerlight");
  } else {
      $(".main-header-wrap").removeClass("headerlight");
  }
})

$(document).ready(function () {
  setTimeout(function () {

  }, 2000);
})

$(document).ajaxComplete(function () {
  setTimeout(function () {

  }, 2000);
});

$(document).ready(function () {
  setTimeout(function () {

  }, 1000);
});

function initFreshChat() {
  window.fcWidget.init({
      token: "84102e15-962c-4493-8dde-14be5a494605",
      host: "https://wchat.freshchat.com"
  });
}


//Live Chat
function initialize(i, t) {
  var e;
  i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src =
      "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
}

function initiateCall() {
  initialize(document, "freshchat-js-sdk")
}
window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load",
  initiateCall, !1);
