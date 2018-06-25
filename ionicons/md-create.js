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
        _react2.default.createElement('path', { d: 'M64 368v80h80l235.727-235.73-80-79.997L64 368zm377.602-217.602c8.53-8.53 8.53-21.334 0-29.865l-50.135-50.135c-8.53-8.53-21.334-8.53-29.865 0l-39.468 39.47 80 79.997 39.468-39.467z' })
      )
    )
  );
};

exports.default = Icon;