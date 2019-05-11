// import "./styles/normalize.css";
// import "./styles/font-Confortaa.css";
// import "./styles/font-Montserrat.css";
import "./styles/style.scss";
// import "./static/img/logo.png";
import "./static/content/logo.svg";
import "./static/content/favicon.svg";
import "./static/content/img.png";

//---------------------------------//

//---------------------------------//
// Copyright for new (Date().getFullYear())

let newDateYear = new Date().getFullYear();
let copyrightText = document.getElementById("textFooter");

copyrightText.innerHTML =
  "Copyright &copy; 1996-" + newDateYear + " Javier Delgado";
//---------------------------------//

//---------------------------------//
// Test message connected with HTML
let greet = "Hellor world!!";
console.log(greet.toUpperCase());
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-E15
$("#button-btn-E15").click(function() {
  $(this).toggleClass("clicked");
  $("#button-btn-E15 #p-btn-E15").text(function(i, text) {
    return text === "Sent!" ? "Send" : "Sent!";
  });
});
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-A17
var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function() {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-B17
$(window).ready(function() {
  $(".btn-B17").wrapInner("<div class=botontext></div>");

  $(".botontext")
    .clone()
    .appendTo($(".btn-B17"));

  $(".btn-B17").append(
    '<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>'
  );

  $(".twist")
    .css("width", "25%")
    .css("width", "+=3px");
});
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-E17
$(".button--bubble").each(function() {
  var $circlesTopLeft = $(this)
    .parent()
    .find(".circle.top-left");
  var $circlesBottomRight = $(this)
    .parent()
    .find(".circle.bottom-right");

  var tl = new TimelineLite();
  var tl2 = new TimelineLite();

  var btTl = new TimelineLite({ paused: true });

  tl.to($circlesTopLeft, 1.2, {
    x: -25,
    y: -25,
    scaleY: 2,
    ease: SlowMo.ease.config(0.1, 0.7, false)
  });
  tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: "+=6", y: "-=2" });
  tl.to(
    $circlesTopLeft.eq(1),
    0.1,
    { scaleX: 1, scaleY: 0.8, x: "-=10", y: "-=7" },
    "-=0.1"
  );
  tl.to(
    $circlesTopLeft.eq(2),
    0.1,
    { scale: 0.2, x: "-=15", y: "+=6" },
    "-=0.1"
  );
  tl.to($circlesTopLeft.eq(0), 1, {
    scale: 0,
    x: "-=5",
    y: "-=15",
    opacity: 0
  });
  tl.to(
    $circlesTopLeft.eq(1),
    1,
    { scaleX: 0.4, scaleY: 0.4, x: "-=10", y: "-=10", opacity: 0 },
    "-=1"
  );
  tl.to(
    $circlesTopLeft.eq(2),
    1,
    { scale: 0, x: "-=15", y: "+=5", opacity: 0 },
    "-=1"
  );

  var tlBt1 = new TimelineLite();
  var tlBt2 = new TimelineLite();

  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
  tlBt1.add(tl);

  tl2.set($circlesBottomRight, { x: 0, y: 0 });
  tl2.to($circlesBottomRight, 1.1, {
    x: 30,
    y: 30,
    ease: SlowMo.ease.config(0.1, 0.7, false)
  });
  tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: "-=6", y: "+=3" });
  tl2.to(
    $circlesBottomRight.eq(1),
    0.1,
    { scale: 0.8, x: "+=7", y: "+=3" },
    "-=0.1"
  );
  tl2.to(
    $circlesBottomRight.eq(2),
    0.1,
    { scale: 0.2, x: "+=15", y: "-=6" },
    "-=0.2"
  );
  tl2.to($circlesBottomRight.eq(0), 1, {
    scale: 0,
    x: "+=5",
    y: "+=15",
    opacity: 0
  });
  tl2.to(
    $circlesBottomRight.eq(1),
    1,
    { scale: 0.4, x: "+=7", y: "+=7", opacity: 0 },
    "-=1"
  );
  tl2.to(
    $circlesBottomRight.eq(2),
    1,
    { scale: 0, x: "+=15", y: "-=5", opacity: 0 },
    "-=1"
  );

  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
  tlBt2.add(tl2);

  btTl.add(tlBt1);
  btTl.to(
    $(this)
      .parent()
      .find(".button.effect-button"),
    0.8,
    { scaleY: 1.1 },
    0.1
  );
  btTl.add(tlBt2, 0.2);
  btTl.to(
    $(this)
      .parent()
      .find(".button.effect-button"),
    1.8,
    { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) },
    1.2
  );

  btTl.timeScale(2.6);

  $(this).on("mouseover", function() {
    btTl.restart();
  });
});
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-A18
$(function() {
  $(".btn-A18")
    .on("mouseenter", function(e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this)
        .find("span")
        .css({ top: relY, left: relX });
    })
    .on("mouseout", function(e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this)
        .find("span")
        .css({ top: relY, left: relX });
    });
  $("[href=#]").click(function() {
    return false;
  });
});
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-B18
$(function() {
  // Vars
  var pointsA = [],
    pointsB = [],
    $canvas = null,
    canvas = null,
    context = null,
    vars = null,
    points = 8,
    viscosity = 20,
    mouseDist = 70,
    damping = 0.05,
    showIndicators = false;
  (mouseX = 0),
    (mouseY = 0),
    (relMouseX = 0),
    (relMouseY = 0),
    (mouseLastX = 0),
    (mouseLastY = 0),
    (mouseDirectionX = 0),
    (mouseDirectionY = 0),
    (mouseSpeedX = 0),
    (mouseSpeedY = 0);

  /**
   * Get mouse direction
   */
  function mouseDirection(e) {
    if (mouseX < e.pageX) mouseDirectionX = 1;
    else if (mouseX > e.pageX) mouseDirectionX = -1;
    else mouseDirectionX = 0;

    if (mouseY < e.pageY) mouseDirectionY = 1;
    else if (mouseY > e.pageY) mouseDirectionY = -1;
    else mouseDirectionY = 0;

    mouseX = e.pageX;
    mouseY = e.pageY;

    relMouseX = mouseX - $canvas.offset().left;
    relMouseY = mouseY - $canvas.offset().top;
  }
  $(document).on("mousemove", mouseDirection);

  /**
   * Get mouse speed
   */
  function mouseSpeed() {
    mouseSpeedX = mouseX - mouseLastX;
    mouseSpeedY = mouseY - mouseLastY;

    mouseLastX = mouseX;
    mouseLastY = mouseY;

    setTimeout(mouseSpeed, 50);
  }
  mouseSpeed();

  /**
   * Init button
   */
  function initButton() {
    // Get button
    var button = $(".btn-B18");
    var buttonWidth = button.width();
    var buttonHeight = button.height();

    // Create canvas
    $canvas = $("<canvas></canvas>");
    button.append($canvas);

    canvas = $canvas.get(0);
    canvas.width = buttonWidth + 100;
    canvas.height = buttonHeight + 100;
    context = canvas.getContext("2d");

    // Add points

    var x = buttonHeight / 2;
    for (var j = 1; j < points; j++) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
    }
    addPoints(buttonWidth - buttonHeight / 5, 0);
    addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
    for (var j = points - 1; j > 0; j--) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
    }
    addPoints(buttonHeight / 5, buttonHeight);

    addPoints(-buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonHeight / 5, 0);

    // Start render
    renderCanvas();
  }

  /**
   * Add points
   */
  function addPoints(x, y) {
    pointsA.push(new Point(x, y, 1));
    pointsB.push(new Point(x, y, 2));
  }

  /**
   * Point
   */
  function Point(x, y, level) {
    this.x = this.ix = 50 + x;
    this.y = this.iy = 50 + y;
    this.vx = 0;
    this.vy = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.level = level;
  }

  Point.prototype.move = function() {
    this.vx += (this.ix - this.x) / (viscosity * this.level);
    this.vy += (this.iy - this.y) / (viscosity * this.level);

    var dx = this.ix - relMouseX,
      dy = this.iy - relMouseY;
    var relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

    // Move x
    if (
      (mouseDirectionX > 0 && relMouseX > this.x) ||
      (mouseDirectionX < 0 && relMouseX < this.x)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vx = (mouseSpeedX / 4) * relDist;
      }
    }
    this.vx *= 1 - damping;
    this.x += this.vx;

    // Move y
    if (
      (mouseDirectionY > 0 && relMouseY > this.y) ||
      (mouseDirectionY < 0 && relMouseY < this.y)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vy = (mouseSpeedY / 4) * relDist;
      }
    }
    this.vy *= 1 - damping;
    this.y += this.vy;
  };

  /**
   * Render canvas
   */
  function renderCanvas() {
    // rAF
    rafID = requestAnimationFrame(renderCanvas);

    // Clear scene
    context.clearRect(0, 0, $canvas.width(), $canvas.height());
    context.fillStyle = "#fff";
    context.fillRect(0, 0, $canvas.width(), $canvas.height());

    // Move points
    for (var i = 0; i <= pointsA.length - 1; i++) {
      pointsA[i].move();
      pointsB[i].move();
    }

    // Create dynamic gradient
    var gradientX = Math.min(
      Math.max(mouseX - $canvas.offset().left, 0),
      $canvas.width()
    );
    var gradientY = Math.min(
      Math.max(mouseY - $canvas.offset().top, 0),
      $canvas.height()
    );
    var distance =
      Math.sqrt(
        Math.pow(gradientX - $canvas.width() / 2, 2) +
          Math.pow(gradientY - $canvas.height() / 2, 2)
      ) /
      Math.sqrt(
        Math.pow($canvas.width() / 2, 2) + Math.pow($canvas.height() / 2, 2)
      );

    var gradient = context.createRadialGradient(
      gradientX,
      gradientY,
      300 + 300 * distance,
      gradientX,
      gradientY,
      0
    );
    gradient.addColorStop(0, "#102ce5");
    gradient.addColorStop(1, "#E406D6");

    // Draw shapes
    var groups = [pointsA, pointsB];

    for (var j = 0; j <= 1; j++) {
      var points = groups[j];

      if (j == 0) {
        // Background style
        context.fillStyle = "#1CE2D8";
      } else {
        // Foreground style
        context.fillStyle = gradient;
      }

      context.beginPath();
      context.moveTo(points[0].x, points[0].y);

      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        var nextP = points[i + 1];
        var val = 30 * 0.552284749831;

        if (nextP != undefined) {
          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;
          p.cx2 = (p.x + nextP.x) / 2;
          p.cy2 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
          // 	continue;
          // }

          // context.bezierCurveTo(p.cx1, p.cy1, p.cx2, p.cy2, nextP.x, nextP.y);
        } else {
          nextP = points[0];
          p.cx1 = (p.x + nextP.x) / 2;
          p.cy1 = (p.y + nextP.y) / 2;

          context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
        }
      }

      // context.closePath();
      context.fill();
    }

    if (showIndicators) {
      // Draw points
      context.fillStyle = "#000";
      context.beginPath();
      for (var i = 0; i < pointsA.length; i++) {
        var p = pointsA[i];

        context.rect(p.x - 1, p.y - 1, 2, 2);
      }
      context.fill();

      // Draw controls
      context.fillStyle = "#f00";
      context.beginPath();
      for (var i = 0; i < pointsA.length; i++) {
        var p = pointsA[i];

        context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
        context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
      }
      context.fill();
    }
  }

  // Init
  initButton();
});
//---------------------------------//

//---------------------------------//
// Function Jquery for Btn-D18
$(function() {
  //creating a style object for the ripple effect
  function RippleStyle(width, height, posX, posY) {
    this.width = width <= height ? height : width;
    this.height = width <= height ? height : width;
    this.top = posY - this.height * 0.5;
    this.left = posX - this.width * 0.5;
  }

  $(".btn-D18").on("mousedown", function(e) {
    //appending an element with a class name "btn-D18-ripple "
    var rippleEl = $('<span class="btn-D18-ripple "></span>').appendTo(this);

    //getting the button's offset position
    var pos = $(this).offset();

    //get the button's width and height
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    //get the cursor's x and y position within the button
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    //adding a css style to the ripple effect
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });

  //this event listener will be triggered once the ripple animation is done
  $(".btn-D18").on(
    "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
    ".btn-D18-ripple ",
    function() {
      $(this).remove();
    }
  );
});
//---------------------------------//
