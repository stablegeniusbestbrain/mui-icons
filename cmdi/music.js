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
      _react2.default.createElement('path', { d: 'M21 3v12.5c0 1.9-1.6 3.5-3.5 3.5S14 17.4 14 15.5s1.6-3.5 3.5-3.5c.5 0 1 .1 1.5.3V6.5L9 8.6v8.9C9 19.4 7.4 21 5.5 21S2 19.4 2 17.5 3.6 14 5.5 14c.5 0 1 .1 1.5.3V6l14-3z' })
    )
  );
};

exports.default = Icon;