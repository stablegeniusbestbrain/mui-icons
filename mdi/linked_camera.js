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
      _react2.default.createElement('circle', { cx: '12', cy: '14', r: '3.2' }),
      _react2.default.createElement('path', { d: 'M16 3.3c2.6 0 4.7 2.1 4.7 4.7H22c0-3.3-2.7-6-6-6v1.3M16 6c1.1 0 2 .9 2 2h1.3c0-1.8-1.5-3.3-3.3-3.3V6' }),
      _react2.default.createElement('path', { d: 'M17 9c0-1.1-.9-2-2-2V4H9L7.2 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z' })
    )
  );
};

exports.default = Icon;