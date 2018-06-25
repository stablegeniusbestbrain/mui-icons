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
      _react2.default.createElement('path', { d: 'M16.9 19.6l-.8-2.5q-.6.3-1.4.3-.5 0-.8-.1t-.5-.5-.3-.5 0-.6v-5.3h3.4V7.8h-3.4V3.4h-2.5q-.1 0-.2.2 0 .6-.2 1.1T9.7 6t-1 1.3-1.6.9v2.2h1.7V16q0 .8.3 1.5T10 19t1.6 1.2 2.4.4q.9 0 1.8-.4t1.1-.6zm5.4-14v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;