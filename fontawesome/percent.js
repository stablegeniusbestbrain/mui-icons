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
      _react2.default.createElement('path', { d: 'M18.9 17.1q0-.7-.6-1.2t-1.2-.5-1.2.5-.5 1.2.5 1.2 1.2.6 1.2-.6.6-1.2zM8.6 6.9q0-.7-.5-1.2t-1.2-.6-1.2.6-.6 1.2.6 1.2 1.2.5 1.2-.5.5-1.2zm13.7 10.2q0 2.2-1.5 3.7t-3.7 1.5-3.6-1.5-1.5-3.7 1.5-3.6 3.6-1.5 3.7 1.5 1.5 3.6zM21 2.6q0 .2-.2.5L6.7 21.9q-.3.4-.7.4H3.9q-.4 0-.6-.3t-.3-.6q0-.2.2-.5L17.3 2.1q.3-.4.7-.4h2.1q.4 0 .6.3t.3.6zm-9 4.3q0 2.1-1.5 3.6T6.9 12t-3.7-1.5-1.5-3.6 1.5-3.7 3.7-1.5 3.6 1.5T12 6.9z' })
    )
  );
};

exports.default = Icon;