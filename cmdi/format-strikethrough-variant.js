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
      _react2.default.createElement('path', { d: 'M23 12v2h-4.4c1 2.1 1 8-6.2 8-8.3 0-8-6.5-8-6.5h3.9c.1 3.4 3.2 3.4 3.8 3.4.7-.1 3-.1 3.2-2.4.1-1.1-1-1.9-2.2-2.5H1v-2h22zm-3.6-4.1h-4s.2-2.8-3.3-2.8C8.7 5.1 9 7.3 9 7.6c0 .2.3 1.6 3 2.3H5.7s-3.5-6.8 5-7.9c8.7-1.2 8.7 5.9 8.7 5.9z' })
    )
  );
};

exports.default = Icon;