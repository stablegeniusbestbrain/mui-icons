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
      _react2.default.createElement('path', { d: 'M9.2 17.6v5.5H6.9V6.7c0-1.4.4-2.6 1.3-3.4.8-.9 2-1.3 3.4-1.3s2.5.3 3.3 1c.8.7 1.2 1.6 1.2 2.8 0 .8-.3 1.6-.8 2.3s-1.2 1.2-2.1 1.5c1.3.2 2.3.7 2.9 1.4.7.7 1 1.6 1 2.7 0 1.4-.4 2.4-1.4 3.3-.9.8-2.1 1.2-3.6 1.2-1 0-2-.2-2.9-.6zm1.5-6.9V8.8c.9-.1 1.6-.4 2.2-.9.5-.6.8-1.2.8-1.9 0-1.4-.7-2.1-2.1-2.1-.8 0-1.3.3-1.8.8-.4.4-.6 1.1-.6 2v8.8c.9.5 1.8.8 2.7.8.8 0 1.5-.2 2-.7.4-.4.7-1 .7-1.8 0-1.8-1.3-2.8-3.9-3.1z' })
    )
  );
};

exports.default = Icon;