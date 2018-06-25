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
      _react2.default.createElement('path', { d: 'M5.1 6q0-.7-.5-1.2t-1.2-.5-1.2.5T1.7 6t.5 1.2 1.2.5 1.2-.5.5-1.2zm14.3 7.7q0 .7-.5 1.2l-6.5 6.6q-.6.5-1.3.5-.7 0-1.2-.5L.4 11.9q-.5-.5-.9-1.3T-.9 9V3.4q0-.7.6-1.2t1.2-.5h5.5q.7 0 1.6.4t1.4.8l9.5 9.6q.5.5.5 1.2zm5.2 0q0 .7-.5 1.2l-6.6 6.6q-.5.5-1.2.5-.5 0-.8-.2t-.7-.6l6.3-6.3q.5-.5.5-1.2t-.5-1.2l-9.6-9.6q-.5-.5-1.4-.8t-1.5-.4h3q.7 0 1.5.4t1.4.8l9.6 9.6q.5.5.5 1.2z' })
    )
  );
};

exports.default = Icon;