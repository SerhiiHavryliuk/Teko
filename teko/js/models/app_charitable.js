/**
 * Created by Serhii on 05.10.2016.
 */

'use strict';

// =============================================================================
// page charitable
// Serhii
// dependencies:
//  - jQuery
// =============================================================================

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrondevoCharitable = function () {
    function FrondevoCharitable() {
        _classCallCheck(this, FrondevoCharitable);

        this.wrapTabFirst = $('.charitable__tab-first');
        this.wrapTabSecond = $('.charitable__tab-ssecond');
        this.containerForTabFirst = $('#charitable__container-tab-first');
        this.containerForTabSecond = $('#charitable__container-tab-second');

        this._eventHandlersInit();
    }

    _createClass(FrondevoCharitable, [{
        key: '_initModules',
        value: function _initModules() {

            $('.charitable__slider').slick({
                dots: true,
                variableWidth: true
            });
        }
    }, {
        key: '_showFirstTab',
        value: function _showFirstTab() {
            this.containerForTabSecond.hide();
            this.containerForTabFirst.show();
            this.wrapTabSecond.removeClass('charitable__tab-active');
            this.wrapTabFirst.addClass('charitable__tab-active');
        }
    }, {
        key: '_showSecondTab',
        value: function _showSecondTab() {
            this.containerForTabSecond.show();
            this.containerForTabFirst.hide();
            this.wrapTabFirst.removeClass('charitable__tab-active');
            this.wrapTabSecond.addClass('charitable__tab-active');
        }

        // _scrolling() {
        //     let pageY = window.pageYOffset || document.documentElement.scrollTop,
        //         bankingTop = $('.charitable__block-three-row').offset().top - 300;
        //
        //     if (pageY > bankingTop) if ($('.animate-charitable').length==0) this._showAnimation();
        //     if (pageY < (bankingTop - 100)) $('.charitable__block-three-img').removeClass('animate-charitable');
        // }

    }, {
        key: '_showAnimation',
        value: function _showAnimation() {
            $('.charitable__block-three-img').addClass('animate-charitable');
        }
    }, {
        key: '_eventHandlersInit',
        value: function _eventHandlersInit() {
            var _this = this;

            $(document).on('ready', function () {
                return _this._initModules();
            });
            this.wrapTabFirst.on('click', function () {
                return _this._showFirstTab();
            });
            this.wrapTabSecond.on('click', function () {
                return _this._showSecondTab();
            });

            // if ($('.charitable__block-three-row').length>0) {
            //     $(window).on( 'scroll', () => {
            //         this._scrolling();
            //     });
            // }
        }
    }]);

    return FrondevoCharitable;
}();

var charitable = new FrondevoCharitable();