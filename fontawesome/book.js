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
      _react2.default.createElement('path', { d: 'M22.8 6.4q.5.8.2 1.7l-3.6 12.2q-.3.8-1.1 1.4t-1.6.6H4.3q-1 0-1.9-.7T1 19.8q-.3-.9 0-1.7v-.4q0-.4.1-.5 0-.1-.1-.2t0-.3q0-.1.1-.3t.2-.3.3-.3q.3-.5.6-1.2t.4-1.3v-.4-.3q0-.2.2-.4t.2-.3q.3-.5.6-1.3t.3-1.2V9v-.4q0-.1.3-.4t.3-.3q.2-.3.5-1.1t.4-1.3v-.3q0-.2-.1-.4l.2-.2q.1-.1.2-.3t.2-.3q.1-.2.3-.4t.2-.5.2-.5.2-.4.4-.3.5-.2.6.1q.5-.1.7-.1h10.2q1 0 1.5.8t.2 1.7l-3.6 12.1q-.5 1.6-1 2.1t-1.7.5H2.9q-.3 0-.5.2-.1.2 0 .5.3 1 2 1h12.3q.4 0 .8-.2t.4-.6L22 6.6v-.8q.5.2.8.6zm-14.2 0q-.1.2 0 .3t.3.2H17q.2 0 .3-.2t.3-.3l.2-.8q.1-.2 0-.3t-.3-.2H9.4q-.2 0-.3.2t-.3.3zM7.4 9.9q0 .1.1.3t.2.1h8.2q.2 0 .3-.1t.2-.3l.3-.9q.1-.2 0-.3t-.3-.1H8.3q-.2 0-.4.1t-.2.3z' })
    )
  );
};

exports.default = Icon;