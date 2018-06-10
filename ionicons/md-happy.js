'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4zm72.8-187.2c17.683 0 31.2-13.518 31.2-31.2s-13.518-31.2-31.2-31.2-31.2 13.518-31.2 31.2 13.518 31.2 31.2 31.2zm-145.6 0c17.682 0 31.2-13.518 31.2-31.2s-13.52-31.2-31.2-31.2c-17.683 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zM256 370.4c48.883 0 89.436-30.164 106.08-72.8H149.92c16.644 42.636 57.197 72.8 106.08 72.8z' })
      )
    )
  );
};

exports.default = Icon;