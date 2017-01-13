$(document).ready(function(){

    $("div.day").click(function(){
        toggleCollapse(this);
    });

    $(".cards").hide();

    function toggleCollapse(element) {
        $(element).next().toggle();
    }

});