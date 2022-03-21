let g = G$("Gael", "Power");
g.greet().setLang("es").greet(true);

$("#login").click(() => {

    var loginGrtr = G$("Gael", "Power");

    $("#logindiv").hide();

    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log()

});
