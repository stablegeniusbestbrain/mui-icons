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
      _react2.default.createElement('path', { d: 'M12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm.3 3c-2.4 0-3.7 1.8-3.7 3.2 0 .9.4 1.7 1.1 2 .1.1.2 0 .2-.1l.2-.4c0-.1 0-.2-.1-.3-.2-.3-.4-.6-.4-1 0-1.3 1-2.5 2.6-2.5 1.4 0 2.2.8 2.2 2 0 1.5-.7 2.7-1.7 2.7-.5 0-.9-.4-.8-1 .1-.6.4-1.3.4-1.8 0-.4-.2-.8-.7-.8-.5 0-1 .6-1 1.4 0 .5.2.8.2.8l-.7 2.8c-.2.9 0 1.9 0 2 0 0 .1.1.1 0 .1-.1.8-.9 1-1.7.1-.2.4-1.4.4-1.4.1.3.7.6 1.2.6 1.7 0 2.8-1.5 2.8-3.5 0-1.6-1.3-3-3.3-3z' })
    )
  );
};

exports.default = Icon;