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
      _react2.default.createElement('path', { d: 'M12 3c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2H18c1 0 1.8.7 1.9 1.6 2.1 8 2.1 8.2 2.1 8.4 0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2 0-.2 0-.4 2-8.4C4.3 9.7 5 9 6 9h2.5C8.2 8.4 8 7.7 8 7c0-2.2 1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM9 15.4l1.4 2.6h1.7l-2-3.3 1.9-2.8h-1.8l-1.3 2.4h-.5v-2.4H7V18h1.4v-2.6H9zm8.3 1.8v-2.3h-2.4V16h1v.8l-.3.1-.7.1c-.3 0-.6-.1-.8-.4-.2-.3-.3-.6-.3-1v-1.3c0-.4.1-.7.3-1 .2-.2.5-.3.8-.3.3 0 .6 0 .7.2.2.2.3.4.4.7h1.3c-.1-.6-.3-1.1-.7-1.5-.4-.4-1-.5-1.7-.5-.8 0-1.3.2-1.8.7-.5.4-.7 1-.7 1.7v1.3c0 .7.2 1.3.7 1.8.5.5 1.1.7 1.8.7.6 0 1.1-.1 1.5-.3.4-.2.7-.4.9-.6z' })
    )
  );
};

exports.default = Icon;