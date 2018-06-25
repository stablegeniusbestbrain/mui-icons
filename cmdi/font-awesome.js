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
      _react2.default.createElement('path', { d: 'M6 3c1.4 0 2.5 1.1 2.5 2.5 0 1-.6 1.9-1.5 2.3v.9c1.1-.3 2.7-.7 4-.7 1.1 0 1.9.2 2.5.4.6.2 1.1.4 2 .4 1.6 0 2.9-.6 3-.7.2-.1.3-.1.5-.1.6 0 1 .4 1 1v8c0 .4-.2.7-.6.9 0 0-1.7.9-3.9.9-1.1 0-2-.2-3-.4-.8-.2-1.6-.4-2.5-.4-1.1 0-2.3.4-3 .7V22H5V7.8c-.9-.4-1.5-1.3-1.5-2.3C3.5 4.1 4.6 3 6 3z' })
    )
  );
};

exports.default = Icon;