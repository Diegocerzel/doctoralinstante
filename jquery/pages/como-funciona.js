$(document).ready(function () {
  console.log("Ready-data");
  //Function to show on hover app data
  function initialStateP() {
    $(".item-app .data-wrapp p").addClass("hidden");
  }
  function hoverData() {
    $(".item-app").hover(
      function () {
        $(this).find(".data-wrapp p").addClass("looking");
        $(this).find(".data-wrapp p").removeClass("hidden");
        $(this).find(".data-wrapp h4").addClass("translated");
        $(this).find("img").addClass("translated");
      },
      function () {
        $(this).find(".data-wrapp p").addClass("hidden");
        $(this).find(".data-wrapp p").removeClass("looking");
        $(this).find(".data-wrapp h4").removeClass("translated");
        $(this).find("img").removeClass("translated");
      }
    );
  }

  function inicialPreguntas() {
    $(".respuesta-wrapp").hide();
  }
  function resetPreguntas() {
    $(".respuesta-wrapp").hide();
    $(".pregunta-wrapp").removeClass("active-preguntas");
  }

  $(".pregunta-wrapp").each(function () {
    $(this).on("click", function () {
      if ($(this).hasClass("active-preguntas")) {
        resetPreguntas();
      } else {
        resetPreguntas();
        $(this).addClass("active-preguntas");
        $(this).siblings(".respuesta-wrapp").show();
      }
    });
  });

  /*Call funcitons*/
  if (screen.width > 990) {
    initialStateP();
    hoverData();
  }

  inicialPreguntas();
});
