'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderNavigation = function (_React$Component) {
    _inherits(SliderNavigation, _React$Component);

    function SliderNavigation() {
        _classCallCheck(this, SliderNavigation);

        return _possibleConstructorReturn(this, (SliderNavigation.__proto__ || Object.getPrototypeOf(SliderNavigation)).apply(this, arguments));
    }

    _createClass(SliderNavigation, [{
        key: 'render',
        value: function render() {
            var NextArrow = this.props.nextArrow ? _react2.default.cloneElement(this.props.nextArrow, { onClick: this.props.onNextClick }) : _react2.default.createElement('div', { className: 'q-slider__arrow q-slider__arrow_next', onClick: this.props.onNextClick });
            var PrevArrow = this.props.prevArrow ? _react2.default.cloneElement(this.props.prevArrow, { onClick: this.props.onPrevClick }) : _react2.default.createElement('div', { className: 'q-slider__arrow q-slider__arrow_prev', onClick: this.props.onPrevClick });

            return _react2.default.createElement(
                'div',
                { className: 'q-slider__navigation' },
                PrevArrow,
                NextArrow
            );
        }
    }]);

    return SliderNavigation;
}(_react2.default.Component);

exports.default = SliderNavigation;