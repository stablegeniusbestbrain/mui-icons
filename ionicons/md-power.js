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
        _react2.default.createElement('path', { d: 'M279.1 48h-46.2v231.1h46.2V48zm111.6 50.2L357.9 131c36.5 29.4 59.9 74.4 59.9 125 0 89.4-72.3 161.8-161.8 161.8S94.2 345.4 94.2 256c0-50.6 23.3-95.7 59.6-125.3l-32.6-32.6C76.4 136.3 48 192.7 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-63.3-28.4-119.7-73.3-157.8z' })
      )
    )
  );
};

exports.default = Icon;