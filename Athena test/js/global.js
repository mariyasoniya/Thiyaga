
var $el = {};
$(document).ready(function () {
    $el.init();
});

$el.init = function () {
    this.hearAthena();
    this.hoverAnimat();
    $('.carousel').carousel({
        interval: 2000
    })
};

$el.getData = function (e) {
    e.method = "GET";
    e.dataType = "json";
    $.ajax(e).done(function (data) {
        e.sucessFn(data);
    });
};
$el.hearAthena = function () {
    var $this = this, options = { url:"json/athina.json",  sucessFn: sucessData };
    $this.getData(options);
    function sucessData(data) {
        var source   = $("#ath-hear-tpl").html();
        var template = Handlebars.compile(source);
        var el_html    = template(data);
        $(".hearimg .row").html(el_html);
    }
};

$el.hoverAnimat = function () {
    $('.hearimg').on("mouseover","img.thumb", function (e) {
        var $ele = $(e.target).next('.an-overlay');
        $(".animate").removeClass("animate");
        if(!$ele.hasClass("animate")){
            $ele.addClass("animate");
        }
    });

    $('.hearimg').on("mouseleave","section.an-overlay", function (e) {
        $(e.target).removeClass("animate");
    });
};





