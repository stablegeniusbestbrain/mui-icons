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
      _react2.default.createElement('path', { d: 'M4.6 6.9c.7-.7 1.4-1.4 1.7-1.2.5.2 0 1-.3 1.5-.2.4-2.9 3.9-2.9 6.3 0 1.3.5 2.3 1.4 3 .7.5 1.7.7 2.6.4 1.1-.3 2-1.4 3.1-2.7 1.2-1.5 2.8-3.5 4.1-3.5 1.6 0 1.6 1 1.7 1.8-3.8.7-5.4 3.7-5.4 5.4 0 1.7 1.5 3.1 3.3 3.1 1.6 0 4.2-1.3 4.6-6.1H21v-2.5h-2.5c-.1-1.7-1.1-4.2-4-4.2-2.2 0-4.2 1.9-4.9 2.8-.6.8-2.1 2.5-2.3 2.7-.3.3-.7.9-1.1.9-.5 0-.8-.8-.4-1.9.3-1.1 1.4-2.9 1.8-3.6.8-1.1 1.3-1.9 1.3-3.2C8.9 3.7 7.3 3 6.4 3 5.1 3 4 4 3.7 4.3l-.9.9 1.8 1.7zm9.3 11.7c-.3 0-.8-.3-.8-.8 0-.6.8-2.2 2.9-2.7-.3 2.7-1.4 3.5-2.1 3.5z' })
    )
  );
};

exports.default = Icon;