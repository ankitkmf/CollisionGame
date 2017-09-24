$("document").ready(function() {
    var tickInterval;
    $("#start").click(function() {
        var childInitialOffset = $(".block").offset().left;
        tickInterval = setInterval("runCar(" + childInitialOffset + ");", 800);
    });

    $("#stop").click(function() {
        stopCar(tickInterval);
    });

});

let stopCar = (tickInterval) => {
    clearInterval(tickInterval);
};

let runCar = (childInitialOffset) => {
    var block = $(".block");
    var area = $(".area");

    var parentInitialOffset = $(".area").offset().left;
    var blockOffset = block.offset().left + block.outerWidth();
    var areaOffset = area.offset().left + area.outerWidth();
    var restartflag = false;

    if (blockOffset < areaOffset) {
        block.animate({ 'marginLeft': "+=30px" });
    } else {
        $('.block').css({ marginLeft: 0 }); //.offset(childInitialOffset);
    }
    console.log("child:" + blockOffset + " , parent:" + areaOffset + " ,childInitialOffset:" + childInitialOffset);
};