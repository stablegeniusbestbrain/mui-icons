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
      _react2.default.createElement('path', { d: 'M4.9 18.9H8V9.6H4.9v9.3zM8.2 6.8q0-.7-.5-1.2t-1.2-.4-1.3.4-.5 1.2q0 .7.5 1.1t1.2.5q.8 0 1.3-.5t.5-1.1zM16 18.9h3.1v-5.3q0-2.1-1-3.1t-2.6-1.1q-1.8 0-2.8 1.6h.1V9.6H9.7v9.3h3.1v-5.2q0-.5.1-.7.2-.5.6-.8t1-.3q1.5 0 1.5 2.1v4.9zm6.3-13.3v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;