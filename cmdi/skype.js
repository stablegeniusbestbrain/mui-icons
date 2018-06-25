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
      _react2.default.createElement('path', { d: 'M18 6c2.1 2 2.8 4.9 2.4 7.5.4.8.6 1.6.6 2.5 0 2.8-2.2 5-5 5-.9 0-1.7-.2-2.5-.6-2.6.4-5.5-.3-7.5-2.4-2.1-2-2.8-4.9-2.4-7.5C3.2 9.7 3 8.9 3 8c0-2.8 2.2-5 5-5 .9 0 1.7.2 2.5.6 2.6-.4 5.5.3 7.5 2.4zm-6 11.2c2.9 0 4.3-1.4 4.3-3.3 0-1.2-.5-2.4-2.7-2.9l-2-.5c-.7-.1-1.6-.4-1.6-1.1 0-.7.6-1.2 1.7-1.2 2.2 0 2 1.5 3.1 1.5.6 0 1.1-.3 1.1-.9 0-1.4-2.2-2.4-4-2.4-2.1 0-4.2.9-4.2 3.1 0 1.1.4 2.3 2.6 2.9l2.6.6c.9.2 1.1.7 1.1 1.1 0 .7-.7 1.4-2 1.4-2.4 0-2-1.9-3.3-1.9-.6 0-1 .4-1 1 0 1.1 1.3 2.6 4.3 2.6z' })
    )
  );
};

exports.default = Icon;