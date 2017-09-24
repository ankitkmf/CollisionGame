$("document").ready(function() {
    var tickInterval;
    $("#start").click(function() {
        var childInitialOffset = $(".block").offset().left;
        tickInterval = setInterval("runCar(" + childInitialOffset + ");", 400);
    });

    $("#stop").click(function() {
        stopCar(tickInterval);
    });

});

let stopCar = (tickInterval) => {
    clearInterval(tickInterval);
};

let runCar = (childInitialOffset) => {
    var car = $(".car");
    var area = $(".area");

    var parentInitialOffset = $(".area").offset().left;
    var carOffset = car.offset().left + car.outerWidth();
    var areaOffset = area.offset().left + area.outerWidth();
    var restartflag = false;

    if (carOffset < areaOffset) {
        car.animate({ 'marginLeft': "+=50px" });
    } else {
        $('.car').css({ marginLeft: 0 }); //.offset(childInitialOffset);
    }
    //  console.log("child:" + carOffset + " , parent:" + areaOffset + " ,childInitialOffset:" + childInitialOffset);
};