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
      _react2.default.createElement('path', { d: 'M7 18.7q0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5t-.5-1.2q0-.7.5-1.2t1.2-.5 1.2.5.5 1.2zm6.7 2.7q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zM4.3 12q0 .7-.5 1.2t-1.2.5-1.2-.5T.9 12t.5-1.2 1.2-.5 1.2.5.5 1.2zm16.1 6.7q0 .7-.5 1.2t-1.2.5q-.7 0-1.2-.5t-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zM7.5 5.3q0 .9-.7 1.5t-1.5.7-1.5-.7-.6-1.5.6-1.5 1.5-.6 1.5.6.7 1.5zM23.1 12q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zm-8.5-9.4q0 1-.8 1.8t-1.8.7-1.8-.7-.8-1.8.8-1.9T12 0t1.8.8.8 1.8zm7.1 2.7q0 1.3-.9 2.2t-2.1.8q-1.3 0-2.2-.8t-.8-2.2q0-1.2.8-2.1t2.2-.9q1.2 0 2.1.9t.9 2.1z' })
    )
  );
};

exports.default = Icon;