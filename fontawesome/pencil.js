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
      _react2.default.createElement('path', { d: 'M6.6 20.6l1.2-1.2-3.2-3.2-1.2 1.2v1.5h1.7v1.7h1.5zm7-12.5q0-.3-.3-.3-.1 0-.2.1l-7.3 7.3q-.1.1-.1.2 0 .3.3.3.1 0 .2-.1l7.3-7.2q.1-.1.1-.3zm-.7-2.5l5.5 5.5L7.3 22.3H1.7v-5.6zM22 6.9q0 .7-.5 1.2l-2.2 2.2-5.6-5.6 2.2-2.2q.5-.5 1.2-.5.8 0 1.3.5l3.1 3.1q.5.6.5 1.3z' })
    )
  );
};

exports.default = Icon;