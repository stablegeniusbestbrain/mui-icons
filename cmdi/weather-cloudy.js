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
      _react2.default.createElement('path', { d: 'M6 19c-2.8 0-5-2.2-5-5s2.2-5 5-5c1-2.3 3.3-4 6-4 3.4 0 6.2 2.7 6.5 6h.5c2.2 0 4 1.8 4 4s-1.8 4-4 4H6zm13-6h-2v-1c0-2.8-2.2-5-5-5-2.5 0-4.5 1.8-4.9 4.2-.4-.1-.7-.2-1.1-.2-1.7 0-3 1.3-3 3s1.3 3 3 3h13c1.1 0 2-.9 2-2s-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;