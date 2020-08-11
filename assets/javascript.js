$("#resume").on("click", function () {
  window.open("./assets/images/newest_resume.pdf");
});

$("#github").on("click", function () {
  window.open("https://github.com/mdorfman21");
});

$("#linkedin").on("click", function () {
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

let projectFive = new Project(
  "Bamazon Node App",
  "",
  "https://github.com/mdorfman21/bamazon",
  "https://cdn.lynda.com/course/696328/696328-637286241569827391-16x9.jpg"
);

let projectSix = new Project(
  "Friend Finder",
  "https://secret-reef-87915.herokuapp.com/",
  "https://github.com/mdorfman21/FriendFinder",
  "https://www.consumer.ftc.gov/sites/www.consumer.ftc.gov/files/games/off-site/game-0003_friend-finder_680x360.png"
);

let projectSeven = new Project(
  "Queue",
  "https://intense-springs-15214.herokuapp.com/",
  "https://github.com/mdorfman21/TheHouseOfAJAX",
  "https://github.com/mdorfman21/TheHouseOfAJAX/blob/master/views/assets/media/clock.png?raw=true"
);

const projectEight = new Project(
  "Memory Game",
  "https://mdorfman21.github.io/clicky-game/",
  "https://github.com/mdorfman21/clicky-game",
  "https://dnm.nflximg.net/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUjfV5Qebbs7UUmvDGkgdPuvZ3SFl81MTYAo2JPxJcSWmjbXDOYD-lxMPCGuy7ybrv1tpHa_jKKeRw6sAIFM37qdfZGp.jpg?r=779"
);

const projectNine = new Project(
  "MODO Investments",
  "https://modo-investments.herokuapp.com",
  "https://github.com/mdorfman21/project-three-trading",
  "https://github.com/mdorfman21/project-three-trading/blob/master/client/src/media/logonav.png?raw=true"
);

var projectArray = [
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
];

projectArray.forEach((project, index) => {
  var newDiv = $("<div>").addClass(
    "card card-gradient margin d-inline-block text-center"
  );
  var title = $("<h2>").text(project.title).addClass("shadows white");
  if (project.deployedSource === "") {
  } else {
    var deployed = $("<a>")
      .attr({
        href: project.deployedSource,
        target: "_blank",
      })
      .addClass("margin white cool")
      .text("Deployed Project ");
  }
  var github = $("<a>")
    .attr({
      href: project.githubSource,
      target: "_blank",
    })
    .addClass("margin cool white")
    .text(" GitHub Code");
  var image = $("<img>")
    .attr({
      src: project.imageSource,
      alt: "image " + (index + 1),
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
