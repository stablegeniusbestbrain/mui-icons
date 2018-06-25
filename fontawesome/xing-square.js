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
      _react2.default.createElement('path', { d: 'M10.9 10.2L9.2 7.3q-.3-.5-.7-.5H6q-.2 0-.3.2-.1.1 0 .4l1.7 2.8v.1l-2.6 4.6q-.2.2 0 .4.1.1.3.1h2.5q.4 0 .6-.4zm8.3-6.6q0-.2-.3-.2h-2.5q-.4 0-.6.5l-5.5 9.8 3.5 6.4q.2.5.7.5h2.4q.3 0 .4-.2.1-.2-.1-.4l-3.4-6.3v-.1L19.2 4q.2-.3 0-.4zm3.1 2v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;