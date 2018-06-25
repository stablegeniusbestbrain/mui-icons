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
      _react2.default.createElement('path', { d: 'M12 15.4q0-.5-.3-.9l-.2-.3q-.2-.3-.3-.5t-.4-.6-.2-.7q-.1-.2-.3-.2t-.3.2q-.1.3-.3.7t-.3.6-.4.5-.2.3q-.2.4-.2.9 0 .7.5 1.2t1.2.5 1.2-.5.5-1.2zm6.9-1.7q0 2.9-2.1 4.9t-4.8 2-4.8-2-2.1-4.9q0-1.9 1.1-3.7.1-.1.9-1.2t1.3-2 1.4-2.4 1.1-2.7q.1-.4.4-.6t.7-.2.7.2.4.6q.4 1.3 1.1 2.7t1.4 2.4 1.3 2 .9 1.2q1.1 1.7 1.1 3.7z' })
    )
  );
};

exports.default = Icon;