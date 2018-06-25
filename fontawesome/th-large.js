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
      _react2.default.createElement('path', { d: 'M11.1 13.7v5.2q0 .7-.5 1.2t-1.2.5H2.6q-.7 0-1.2-.5t-.5-1.2v-5.2q0-.7.5-1.2t1.2-.5h6.8q.7 0 1.2.5t.5 1.2zm0-10.3v5.2q0 .7-.5 1.2t-1.2.5H2.6q-.7 0-1.2-.5T.9 8.6V3.4q0-.7.5-1.2t1.2-.5h6.8q.7 0 1.2.5t.5 1.2zm12 10.3v5.2q0 .7-.5 1.2t-1.2.5h-6.8q-.7 0-1.2-.5t-.5-1.2v-5.2q0-.7.5-1.2t1.2-.5h6.8q.7 0 1.2.5t.5 1.2zm0-10.3v5.2q0 .7-.5 1.2t-1.2.5h-6.8q-.7 0-1.2-.5t-.5-1.2V3.4q0-.7.5-1.2t1.2-.5h6.8q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;