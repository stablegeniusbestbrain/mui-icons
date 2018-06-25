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
      _react2.default.createElement('path', { d: 'M12 1.7q2.8 0 5.2 1.4t3.7 3.7 1.4 5.2-1.4 5.2-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7zm5.1 11q.5-.2.5-.7t-.5-.7L9.9 7q-.5-.3-.9 0-.4.2-.4.7v8.6q0 .5.4.7.2.1.4.1.3 0 .5-.1z' })
    )
  );
};

exports.default = Icon;