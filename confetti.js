
function checkCoordinates() {
    const teahouse = [48.14537, 11.58580];
    const mono = [48.1501, 11.5909];
    const nirgendwo = [48.1654, 11.6034];
    const stauwehr = [48.1686, 11.6168];
    const amphi = [48.1738, 11.6121];
    const ojb = [48.1767, 11.6170]; //TODO fill in real coordinates
    const tristan = [48.1830, 11.6094];

    var coordX = document.getElementById('x').value;
    var coordY = document.getElementById('y').value;
    var text = "Leider nicht ... aber immer weiter so! (Vielleicht nicht genau so, weil ihr euch vermutlich grad verirrt - oder ihr habt euch verschrieben...) Hint: nur 4 Stellen diesmal";
    var confetti = true;

    if ( coordX == teahouse[0] && coordY == teahouse[1] ) {
      text = "Hey Leni! Happy Birthday <3. Good job finding these coordinates. This is indeed the teahouse you're looking for! See you soon :)";
    } else if ( coordX == stauwehr[0] && coordY == stauwehr[1] ) {
      text = "Good job everyone! Der Stauwehr ist das nächste Ziel. Keep up the good work :)";
    } else if ( coordX == mono[0] && coordY == mono[1] ) {
      text = "Weiter so! Wenn ihr in dem tempo weitermacht ist das Essen vielleicht noch warm!";
    } else if ( coordX == nirgendwo[0] && coordY == nirgendwo[1] ) {
      text = "Ja genau da wollen wir hin ... weiß zwar niemand was genau da ist, aber wird wohl lustig werden";
    } else if ( coordX == amphi[0] && coordY == amphi[1] ) {
      text = "Theaterbesuch! Jetzt ist es nicht mehr weit!";
    } else if ( coordX == mono[0] && coordY == mono[1] ) {
      text = "Ja wer will schon nach GIriechenland fahren, wenn man am Mono chillen kann. *sonnenbrillensmiley*";
    } else if ( coordX == tristan[0] && coordY == tristan[1] ) {
      text = "It's the final Countdown! Super, dass ihr es so weit geschafft habt!";
    } else {
      confetti = false;
    }

    document.getElementById('solution').innerHTML = text;

    if (confetti) {
    // launch confetti
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
}

function fire(particleRatio, opts) {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}
