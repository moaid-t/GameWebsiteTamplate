const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

$(".popup").click(function () {
  let $this = $(this);
  let $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
  let $title = $("<h1>").text($this.data("title"));
  $("#video-view").html($title).append($iframe);
  $iframe.wrap("<div class='class-video'>");
  });

  $("#youtubeModal").on('hidden.bs.modal', function (e) {
  $("#youtubeModal iframe").attr("src", $("#youtubeModal iframe").attr("src"));
  });