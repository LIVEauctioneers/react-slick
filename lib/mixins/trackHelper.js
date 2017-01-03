'use strict';
<<<<<<< HEAD

exports.__esModule = true;
exports.getTrackLeft = exports.getTrackAnimateCSS = exports.getTrackCSS = undefined;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
=======
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ReactDOM = require('./ReactDOM');

var _ReactDOM2 = _interopRequireDefault(_ReactDOM);
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac

var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
  return keysArray.reduce(function (value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error('Keys Missing', spec);
};

<<<<<<< HEAD
var getTrackCSS = exports.getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

  var trackWidth, trackHeight;

  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

  if (!spec.vertical) {
    if (spec.variableWidth) {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    } else if (spec.centerMode) {
      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
    } else {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    }
  } else {
    trackHeight = trackChildren * spec.slideHeight;
=======
var getTrackCSS = function getTrackCSS(spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

  var trackWidth;

  if (spec.variableWidth) {
    trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
  } else if (spec.centerMode) {
    trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
  } else {
    trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
  }

  var style = {
    opacity: 1,
<<<<<<< HEAD
    WebkitTransform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transform: !spec.vertical ? 'translate3d(' + spec.left + 'px, 0px, 0px)' : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: !spec.vertical ? 'translateX(' + spec.left + 'px)' : 'translateY(' + spec.left + 'px)'
  };

  if (trackWidth) {
    (0, _objectAssign2.default)(style, { width: trackWidth });
  }

  if (trackHeight) {
    (0, _objectAssign2.default)(style, { height: trackHeight });
  }

  // Fallback for IE8
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + 'px';
    } else {
      style.marginTop = spec.left + 'px';
    }
=======
    width: trackWidth,
    WebkitTransform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: 'translateX(' + spec.left + 'px)'
  };

  // Fallback for IE8
  if (!window.addEventListener && window.attachEvent) {
    style.marginLeft = spec.left + 'px';
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
  }

  return style;
};

<<<<<<< HEAD
var getTrackAnimateCSS = exports.getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
=======
exports.getTrackCSS = getTrackCSS;
var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

<<<<<<< HEAD
var getTrackLeft = exports.getTrackLeft = function getTrackLeft(spec) {

  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth', 'slideHeight']);
=======
exports.getTrackAnimateCSS = getTrackAnimateCSS;
var getTrackLeft = function getTrackLeft(spec) {

  checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'centerMode', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth']);
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
<<<<<<< HEAD
  var verticalOffset = 0;
=======
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac

  if (spec.fade) {
    return 0;
  }

  if (spec.infinite) {
<<<<<<< HEAD
    if (spec.slideCount >= spec.slidesToShow) {
      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
      verticalOffset = spec.slideHeight * spec.slidesToShow * -1;
=======
    if (spec.slideCount > spec.slidesToShow) {
      slideOffset = spec.slideWidth * spec.slidesToShow * -1;
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        if (spec.slideIndex > spec.slideCount) {
          slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
<<<<<<< HEAD
          verticalOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight * -1;
        } else {
          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
          verticalOffset = spec.slideCount % spec.slidesToScroll * spec.slideHeight * -1;
        }
      }
    }
  } else {

    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        var slidesToOffset = spec.slidesToShow - spec.slideCount % spec.slidesToScroll;
        slideOffset = slidesToOffset * spec.slideWidth;
      }
    }
=======
        } else {
          slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
        }
      }
    }
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
  }

  if (spec.centerMode) {
    if (spec.infinite) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    } else {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    }
  }

<<<<<<< HEAD
  if (!spec.vertical) {
    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
  } else {
    targetLeft = spec.slideIndex * spec.slideHeight * -1 + verticalOffset;
  }
=======
  targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac

  if (spec.variableWidth === true) {
    var targetSlideIndex;
    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
<<<<<<< HEAD
      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
    } else {
      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
      targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
=======
      targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).childNodes[spec.slideIndex];
    } else {
      targetSlideIndex = spec.slideIndex + spec.slidesToShow;
      targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).childNodes[targetSlideIndex];
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
    }
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (spec.centerMode === true) {
      if (spec.infinite === false) {
<<<<<<< HEAD
        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex];
      } else {
        targetSlide = _reactDom2.default.findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
      }

      if (targetSlide) {
        targetLeft = targetSlide.offsetLeft * -1 + (spec.listWidth - targetSlide.offsetWidth) / 2;
      }
=======
        targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).children[spec.slideIndex];
      } else {
        targetSlide = _ReactDOM2['default'].findDOMNode(spec.trackRef).children[spec.slideIndex + spec.slidesToShow + 1];
      }

      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
      targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
    }
  }

  return targetLeft;
<<<<<<< HEAD
};
=======
};
exports.getTrackLeft = getTrackLeft;
>>>>>>> 20040bf053a374fe74938e162d7587b6fac67eac
