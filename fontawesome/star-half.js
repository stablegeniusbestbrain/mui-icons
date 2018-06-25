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
      _react2.default.createElement('path', { d: 'M17.1.4v18l-6 3.1q-.3.2-.5.2-.3 0-.4-.2T10 21q0-.1.1-.3l1.1-6.7-4.9-4.7Q6 8.9 6 8.7q0-.5.7-.7l6.8-.9 3-6.1q.2-.6.6-.6z' })
    )
  );
};

exports.default = Icon;