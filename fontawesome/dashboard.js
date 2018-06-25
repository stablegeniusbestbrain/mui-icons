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
      _react2.default.createElement('path', { d: 'M5.1 15.4q0-.7-.5-1.2t-1.2-.5-1.2.5-.5 1.2.5 1.2 1.2.5 1.2-.5.5-1.2zm2.6-6q0-.7-.5-1.2T6 7.7t-1.2.5-.5 1.2.5 1.2 1.2.5 1.2-.5.5-1.2zm5.7 6.5l1.4-5.1q.1-.4-.1-.7t-.5-.4-.7.1-.4.5l-1.3 5.1q-.8.1-1.4.6t-.9 1.3q-.3 1.1.3 2t1.5 1.2 2-.3 1.2-1.5q.2-.8-.1-1.6t-1-1.2zm8.9-.5q0-.7-.5-1.2t-1.2-.5-1.2.5-.5 1.2.5 1.2 1.2.5 1.2-.5.5-1.2zm-8.6-8.5q0-.8-.5-1.3T12 5.1t-1.2.5-.5 1.3.5 1.2 1.2.5 1.2-.5.5-1.2zm6 2.5q0-.7-.5-1.2T18 7.7t-1.2.5-.5 1.2.5 1.2 1.2.5 1.2-.5.5-1.2zm4.3 6q0 3.5-1.9 6.5-.2.4-.7.4H2.6q-.5 0-.7-.4-1.9-3-1.9-6.5 0-2.4 1-4.6t2.5-3.9 3.8-2.5 4.7-1 4.7 1 3.8 2.5 2.5 3.9 1 4.6z' })
    )
  );
};

exports.default = Icon;