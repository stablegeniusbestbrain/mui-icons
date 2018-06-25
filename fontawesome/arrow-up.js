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
      _react2.default.createElement('path', { d: 'M22.4 13q0 .7-.5 1.2l-1 1q-.5.5-1.2.5t-1.2-.5l-3.9-3.9v9.4q0 .7-.5 1.2t-1.2.4h-1.8q-.7 0-1.2-.4t-.5-1.2v-9.4l-3.9 3.9q-.5.5-1.2.5t-1.2-.5l-1-1q-.5-.5-.5-1.2t.5-1.2l8.7-8.7q.5-.5 1.2-.5t1.2.5l8.7 8.7q.5.5.5 1.2z' })
    )
  );
};

exports.default = Icon;