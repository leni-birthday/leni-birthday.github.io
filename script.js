$(document).ready(function() {
    animateHead($('.leni-head'));

});

function makeNewPosition($container) {
    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

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

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.4;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

function checkIngredient(id) {
    var ingredients = ["VODKA", "RUM", "TEQUILA", "ORANGENLIKÖR", "LIMETTENSAFT", "SIMPLESYRUP", "ZUCKERSIRUP", "SIRUP", "ZITRONENSAFT", "COLA", "ORANGENLIKOER",
  "COCACOLA", "PEPSI", "SYRUP", "LIMETTE", "ZITRONE", "ZITRONEN", "LIMETTEN"];

    var a = document.getElementById(id).value;
    var b = ingredients.includes(a.toUpperCase().trim());

    if (b) {
      document.getElementById(id).style.backgroundColor="green"
    } else {
      document.getElementById(id).style.backgroundColor="red"
    }
}
