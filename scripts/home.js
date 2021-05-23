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


