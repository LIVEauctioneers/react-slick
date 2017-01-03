'use strict';

<<<<<<< HEAD
var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    className: '',
    accessibility: true,
=======
var defaultProps = {
    className: '',
    // accessibility: true,
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
<<<<<<< HEAD
    customPaging: function customPaging(i) {
        return _react2.default.createElement(
            'button',
            null,
            i + 1
        );
    },
=======
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
    dots: false,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: false,
<<<<<<< HEAD
    pauseOnHover: true,
=======
    pauseOnHover: false,
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
    responsive: null,
    rtl: false,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    afterChange: null,
    beforeChange: null,
    edgeEvent: null,
    init: null,
    swipeEvent: null,
    // nextArrow, prevArrow are react componets
    nextArrow: null,
    prevArrow: null
};

module.exports = defaultProps;