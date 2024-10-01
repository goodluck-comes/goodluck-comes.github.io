(function ($, elementor) {
    'use strict';

    var widgetAdvancedProgressBar = function ($scope, $) {
        var $advancedProgressBars = $scope.find('.bdt-ep-advanced-progress-bar-item');
        if (!$advancedProgressBars.length) {
            return;
        }

        $advancedProgressBars.each(function () {
            var $this = $(this);

            epObserveTarget($this[0], function () {
                var bar = $this.find(".bdt-ep-advanced-progress-bar-fill");

                bar.each(function () {
                    var $barFill = $(this);
                    var thisMaxVal = $barFill.attr("data-max-value");
                    var thisFillVal = $barFill.attr("data-width").slice(0, -1);
                    var formula = (thisFillVal * 100) / thisMaxVal;

                    $barFill.css("width", formula + '%');
                    $barFill.children(".bdt-ep-advanced-progress-bar-parcentage").css({
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        '-ms-transform': 'scale(1)',
                        '-o-transform': 'scale(1)',
                        'transform': 'scale(1)'
                    });
                });
            });
        });
    };

    jQuery(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/bdt-advanced-progress-bar.default', widgetAdvancedProgressBar);
    });
}(jQuery, window.elementorFrontend));
