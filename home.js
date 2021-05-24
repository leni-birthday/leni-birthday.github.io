$(document).ready(function() {
    animateHead($(".leni-head"));
});

function animateHead($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateHead($target);
    });
}

function makeNewPosition($container) {
    const h = $container.height() - 50;
    const w = $container.width() - 50;

    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);

    return [nh, nw];
}

function calcSpeed(prev, next) {
    const x = Math.abs(prev[1] - next[1]);
    const y = Math.abs(prev[0] - next[0]);

    const greatest = x > y ? x : y;

    const speedModifier = 0.4;

    return Math.ceil(greatest / speedModifier);
}

function checkCoordinates() {

    const teahouse = [48.1455654679902, 11.585828454077774];
    const stauwehr = [48.16864223344396, 11.616827269628384];

    var coordX = document.getElementById('x').value;
    var coordY = document.getElementById('y').value;

    if ( coordX == teahouse[0] && coordY == teahouse[1] ) {
      document.getElementById('solution').innerHTML = "Hey Leni! Happy Birthday <3. Good job finding out those coordinates. This is indeed the teahouse you're looking for! See you soon :)"
    } else if ( coordX == stauwehr[0] && coordY == stauwehr[1] ) {
      document.getElementById('solution').innerHTML = "Good job everyone! Der Stauwehr ist das nächste Ziel. Keep up the good work :)"
    } else {
      document.getElementById('solution').innerHTML = "Leider nicht ... aber immer weiter so!"
    }
}
