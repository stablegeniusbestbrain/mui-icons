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
      _react2.default.createElement('path', { d: 'M7.7 6q0-.7-.5-1.2T6 4.3t-1.2.5T4.3 6t.5 1.2 1.2.5 1.2-.5.5-1.2zM22 13.7q0 .7-.5 1.2l-6.6 6.6q-.5.5-1.2.5t-1.2-.5l-9.6-9.6q-.5-.5-.8-1.3T1.7 9V3.4q0-.7.5-1.2t1.2-.5H9q.7 0 1.6.4t1.3.8l9.6 9.6q.5.5.5 1.2z' })
    )
  );
};

exports.default = Icon;