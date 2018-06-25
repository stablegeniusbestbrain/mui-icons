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
      _react2.default.createElement('path', { d: 'M12 22.3q-.3 0-.6-.3l-8.3-8q-.2-.1-.4-.4t-.8-.8-.9-1.3-.7-1.7T0 8q0-3 1.7-4.6t4.7-1.7q.8 0 1.7.3t1.6.8 1.3.9 1 .9q.5-.5 1-.9t1.3-.9 1.6-.8 1.7-.3q3 0 4.7 1.7T24 8q0 2.9-3.1 6l-8.3 8q-.3.3-.6.3z' })
    )
  );
};

exports.default = Icon;