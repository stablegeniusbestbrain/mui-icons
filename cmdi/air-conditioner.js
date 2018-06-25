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
      _react2.default.createElement('path', { d: 'M6.6.7c2.3-1.8 4.9.4 5.4 3.8.5 0 .9.1 1.3.3.5-.6 1-1.4.8-2.3-.4-2.1 2-3.9 4.3-.9 1.8 2.3-.4 4.9-3.9 5.4 0 .5-.1.9-.3 1.3.6.5 1.4.9 2.3.8 2.1-.5 3.9 1.9.9 4.2-2.3 1.9-4.9-.4-5.4-3.8-.5 0-.9-.1-1.3-.3-.5.6-1 1.4-.8 2.3.4 2.1-2 3.9-4.3.9-1.8-2.3.5-4.9 3.9-5.4 0-.5.1-.9.3-1.3-.6-.5-1.4-.9-2.3-.8C5.4 5.4 3.6 3 6.6.7zM5 16h2c1.1 0 2 .9 2 2v6H7v-2H5v2H3v-6c0-1.1.9-2 2-2zm0 2v2h2v-2H5zm7.9-2H15l-2.9 8H10l2.9-8zm5.1 0h3v2h-3v4h3v2h-3c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;