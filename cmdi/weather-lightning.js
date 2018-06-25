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
      _react2.default.createElement('path', { d: 'M6 16c-2.8 0-5-2.2-5-5s2.2-5 5-5c1-2.4 3.3-4 6-4 3.4 0 6.2 2.7 6.5 6h.5c2.2 0 4 1.8 4 4s-1.8 4-4 4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c1.1 0 2-.9 2-2s-.9-2-2-2h-2V9c0-2.8-2.2-5-5-5-2.5 0-4.5 1.8-4.9 4.2C6.7 8.1 6.4 8 6 8c-1.7 0-3 1.3-3 3s1.3 3 3 3h1c.6 0 1 .4 1 1s-.4 1-1 1H6zm6-5h3l-2 4h2l-3.7 7 .7-5H9.5l2.5-6z' })
    )
  );
};

exports.default = Icon;