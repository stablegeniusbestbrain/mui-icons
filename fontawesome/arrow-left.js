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
      _react2.default.createElement('path', { d: 'M22.3 12v1.7q0 .7-.4 1.2t-1.2.5h-9.4l3.9 4q.5.4.5 1.2t-.5 1.2l-1 1q-.5.5-1.2.5t-1.2-.5l-8.7-8.7q-.5-.5-.5-1.2t.5-1.3l8.7-8.7q.5-.5 1.2-.5t1.2.5l1 1q.5.5.5 1.2t-.5 1.3l-3.9 3.9h9.4q.7 0 1.2.5t.4 1.2z' })
    )
  );
};

exports.default = Icon;