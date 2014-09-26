$(document).ready(function() {
    'use strict';

    var path = window.location.pathname.split("index.php/");
    var secndPath = path[1];

    jQuery.fn.preventDoubleSubmission = function() {
        $(this).on('submit',function(e){
            var $form = $(this);

            if ($form.data('submitted') === true) {
                e.preventDefault();
                e.stopImmediatePropagation();
            } else {
                $form.data('submitted', true);
            }
        });

        return this;
    };

    if (navigator.userAgent.indexOf("Firefox") !== -1){
        if(secndPath === '' || secndPath === 'login'){
            $('body').css('display', 'flex');
        } else {
            $('body').css('display', 'block');
        }
    }

    $.fn.serializeObject = function() {
        var object = {};
        var array = this.serializeArray();
        $.each(array, function() {
            if (object[this.name] !== undefined) {
                if (!object[this.name].push) {
                    object[this.name] = [object[this.name]];
                }
                object[this.name].push(this.value || '');
            } else {
                object[this.name] = this.value || '';
            }
        });
        return object;
    };

    Number.prototype.formatMoney = function(decPlaces, thouSeparator, decSeparator) {
        var n = this,
            sign = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;

        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
        decSeparator = decSeparator === undefined ? "." : decSeparator;
        thouSeparator = thouSeparator === undefined ? "," : thouSeparator;

        return sign + (j ? i.substr(0, j) + thouSeparator : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : "");
    };

    $(".alert .close").click(function() {
        $(this).parent ().addClass("hide");
    });

    var s4 = window.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    var guid = window.guid = function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    $('.sidebar .nav li.collapsible').click(function (event) {
        // event.preventDefault();
        // event.stopImmediatePropagation();

        var element = $(event.target);

        $( this ).find('a:first').addClass( "select" );

        if(element.closest('.collapsible').find('ul').hasClass("fadeOutUp")) {
            element.closest('.collapsible').find('ul').removeClass('fadeOutUp hide').addClass('fadeInDown');
        } else {
            element.closest('.collapsible').find('ul').removeClass('fadeInDown').addClass('fadeOutUp');
            setTimeout(function() {
                element.closest('.collapsible').find('ul').addClass('hide');
            }, 600);
            $( this ).closest('.collapsible').find('a:first').removeClass('select');
        }
    });

    $('.user').click(function() {
        $('.user .sub').toggleClass('fadeInDown');
    });
    $('.notification a').click(function() {
        $('.notification .sub').toggleClass('fadeInDown');
    });

    stylized ();

});


// ===================== xn =====================

function stylized () {

    $("*").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });

    $(".tab a:first-child").addClass("first");
    $(".tab a:last-child").addClass("last");

    $("input:text").addClass("text");
    $("input:password").addClass("password");
    $("input:reset").addClass("reset");
    $("input:submit").addClass("submit");
    $("input:button").addClass("button");
    $("input:radio").addClass("radio");

    $("ul > li:nth-child(odd), ol > li:nth-child(odd), .list > .comment:nth-child(odd)").addClass("odd");
    $("ul > li:nth-child(even), ol > li:nth-child(even), .list > .comment:nth-child(even)").addClass("even");
    $("ul > li:first-child, ol > li:first-child, .list > .comment:first-child").addClass("first");
    $("ul > li:last-child, ol > li:last-child, .list > .comment:last-child").addClass("last");

    $("[class^=blocks_] > div.block:first-child, [class^=blocks_] > div.block:first").addClass("first");
    $("[class^=blocks_] > div.block:last-child, [class^=blocks_] > div.block:last").addClass("last");

    $("[class^=tablelist] tr:first-child").addClass ("first");
    $("[class^=tablelist] tr:last-child").addClass ("last");
    $("[class^=tablelist] tr:nth-child(odd)").addClass ("even");
    $("[class^=tablelist] tr:nth-child(even)").addClass ("odd");

    $("[class^=tablelist] tr:first-child td:first-child").addClass ("first");
    $("[class^=tablelist] tr:first-child td:last-child").addClass ("last");
    $("[class^=tablelist] tr:first-child td:nth-child(odd)").addClass ("even");
    $("[class^=tablelist] tr:first-child td:nth-child(even)").addClass ("odd");

    $("[class^=tablelist] tr td:first-child").addClass ("first");
    $("[class^=tablelist] tr td:last-child").addClass ("last");
    $("[class^=tablelist] tr td:nth-child(odd)").addClass ("even");
    $("[class^=tablelist] tr td:nth-child(even)").addClass ("odd");

    $('form').preventDoubleSubmission();
}

// ================================================
