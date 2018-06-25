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
      _react2.default.createElement('path', { d: 'M13.3 17.2c-1.1 0-2-.4-2.7-1.1l-1.2 4-.1.3v-.1c-.3.4-.7.7-1.2.7-.7 0-1.4-.6-1.4-1.4 0 0 .1-.1.1-.2h-.1l.1-.2 2.3-6.9s-.2-.8-.2-1.9c0-2.1 1.1-2.8 2.1-2.8.9 0 1.7.4 1.7 1.7 0 1.6-1.1 2.5-1.1 3.7 0 .9.8 1.7 1.7 1.7 2.9 0 3.9-2.2 3.9-4.3.1-2.7-2.3-4.9-5.2-4.9-2.9 0-5.2 2.2-5.2 4.9 0 .9.2 1.7.6 2.5.1.2.2.4.2.6 0 .7-.6 1.2-1.2 1.2-.5 0-.9-.2-1.1-.6-.7-1.1-1-2.4-1-3.7C4.3 6.3 7.7 3 12 3c4.3 0 7.8 3.3 7.8 7.4 0 3.3-2.1 6.9-6.5 6.9z' })
    )
  );
};

exports.default = Icon;