$("#resume").on("click", function() {
  window.open("/assets/images/Morgan Dorfman Résumé.pdf");
});

$("#github").on("click", function() {
  window.open("https://github.com/mdorfman21");
});

$("#linkedin").on("click", function() {
  window.open("https://www.linkedin.com/in/mdorfman21/");
});

function Project(title, deployedSource, githubSource, imageSource) {
  this.title = title;
  this.deployedSource = deployedSource;
  this.githubSource = githubSource;
  this.imageSource = imageSource;
}

var projectOne = new Project(
  "Be Your own Bartender",
  "https://mdorfman21.github.io/Group-Router/",
  "https://github.com/mdorfman21/Group-Router",
  "https://norrismclaughlin.com/llb/wp-content/uploads/sites/19/2018/11/BYOB-Bring-Your-Own-Bottle.jpg"
);

var projectTwo = new Project(
  "Giftastic",
  "https://mdorfman21.github.io/GifTastic/",
  "https://github.com/mdorfman21/GifTastic",
  "https://d1qb2nb5cznatu.cloudfront.net/startups/i/271584-dbab3d09fb8aba2827f06c9020248151-medium_jpg.jpg?buster=1423844699"
);

var projectThree = new Project(
  "Inception Trivia Game",
  "https://mdorfman21.github.io/TriviaGame/",
  "https://github.com/mdorfman21/TriviaGame",
  "https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/86/ac/14/86ac14f2-8c9b-2a5a-80be-49b8ee402228/pr_source.lsr/268x0w.png"
);

var projectFour = new Project(
  "Liri Node Bot",
  "",
  "https://github.com/mdorfman21/liri-node-app",
  "https://pbs.twimg.com/profile_images/968293311986323456/z2GIyUZH.jpg"
);

var projectArray = [projectOne, projectTwo, projectThree, projectFour];

projectArray.forEach((project, index) => {
  var newDiv = $("<div>").addClass(
    "card card-gradient margin d-inline-block text-center"
  );
  var title = $("<h2>")
    .text(project.title)
    .addClass("shadows white");
  var deployed = $("<a>")
    .attr({
      href: project.deployedSource,
      target: "_blank"
    })
    .addClass("margin white cool")
    .text("Deployed Project ");
  var github = $("<a>")
    .attr({
      href: project.githubSource,
      target: "_blank"
    })
    .addClass("margin cool white")
    .text(" GitHub Code");
  var image = $("<img>")
    .attr({
      src: project.imageSource,
      alt: "image " + (index + 1)
    })
    .addClass("card-img");
  newDiv.append(title, image, deployed, github);
  $("#append-to").append(newDiv);
});

function myFunction(x) {
  if (x.matches) {
    $(".card").removeClass("d-inline");
  }
}
var x = window.matchMedia("(max-width: 760px)");
myFunction(x);
x.addListener(myFunction);
