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
      _react2.default.createElement('path', { d: 'M8.6 5.1h6.8V3.4H8.6v1.7zm-4.7 0v17.2H3q-1.2 0-2.1-.9T0 19.3V8.1Q0 6.9.9 6T3 5.1h.9zm15 0v17.2H5.1V5.1h1.8V3q0-.5.3-.9t.9-.4h7.8q.5 0 .9.4t.3.9v2.1h1.8zm5.1 3v11.2q0 1.2-.9 2.1t-2.1.9h-.9V5.1h.9q1.2 0 2.1.9t.9 2.1z' })
    )
  );
};

exports.default = Icon;