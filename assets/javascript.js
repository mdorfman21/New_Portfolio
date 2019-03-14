$("#resume").on("click", function() {
  window.open("/assets/images/Morgan Dorfman Résumé.pdf");
});

$("#github").on("click", function() {
  window.open("https://github.com/mdorfman21");
});

$("#linkedin").on("click", function() {
  window.open("https://www.linkedin.com/in/mdorfman21/");
});

var projectOne = {
  title: "Be Your Own Bartender",
  deployedSource: "https://mdorfman21.github.io/Group-Router/",
  githubSource: "https://github.com/mdorfman21/Group-Router"
};
var projectTwo = {
  title: "Giftastic",
  deployedSource: "https://mdorfman21.github.io/GifTastic/",
  githubSource: "https://github.com/mdorfman21/GifTastic"
};
var projectThree = {
  title: "Inception Trivia Game",
  deployedSource: "https://mdorfman21.github.io/TriviaGame/",
  githubSource: "https://github.com/mdorfman21/TriviaGame"
};

var projectArray = [projectOne, projectTwo, projectThree];

projectArray.forEach(project => {
  var newDiv = $("<div>").addClass("card bg-success margin d-inline-block");
  var title = $("<h3>").text(project.title);
  var deployed = $("<a>")
    .attr({
      href: project.deployedSource,
      target: "_blank"
    })
    .addClass("margin d-inline")
    .text("Deployed Project Page");
  var github = $("<a>")
    .attr({
      href: project.githubSource,
      target: "_blank"
    })
    .addClass("margin d-inline")
    .text("GitHub Code");
  newDiv.append(title, deployed, github);
  $("#append-to").append(newDiv);
});
