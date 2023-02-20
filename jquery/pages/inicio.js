$(document).ready(function () {
  /*Change name on file input*/
  $("#file-input").on("change", function () {
    var i = $(this).prev("label").clone();
    var file = $("#file-input")[0].files[0].name;
    $(".file-input").text(file);
  });

  /*pop-up-functionallity*/
  function intitialPopup() {
    $(".pop-up-b").hide();
  }
  function showIndividuos() {
    $("#individuos").slideDown("fast");
  }
  function showEmpresas() {
    $("#empresas").slideDown("fast");
  }
  function showkAsociaciones() {
    $("#asociaciones").slideDown("fast");
  }

  intitialPopup();

  $(".close-pop ").click(function () {
    $(".pop-up-b").slideUp("fast");
  });

  $("#item-individuos").click(function () {
    showIndividuos();
  });
  $("#item-empresas").click(function () {
    showEmpresas();
  });
  $("#item-asociaciones").click(function () {
    showkAsociaciones();
  });
});
