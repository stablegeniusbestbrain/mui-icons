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
      _react2.default.createElement('path', { d: 'M22.7 13.4q0 .3-.2.6t-.5.3h-2.3v-1.9h2q.2 0 .3.1.3 0 .5.3t.2.6zm-.2-2.9q0 .3-.2.6t-.5.3h-2.1V9.6h2q.1 0 .1.1.3 0 .5.2t.2.6zM6.3 12.7V8.6h-3v4.1q0 .8-.5 1.3t-1.4.5q-1.5 0-3.1-.8v1.5q.7.2 1.6.3t1.5.1h.5q4.4 0 4.4-2.9zm9.6 2.5v-1.5q-1.3.7-2.7.8-1.4.1-2.3-.6t-.8-1.9.8-1.9 2.3-.6q1.4.1 2.7.8V8.8l-1.4-.2q-.7-.1-1-.2h-.4q-1.7-.1-2.9.2t-1.9.8-1 1.2T7 12t.3 1.4 1 1.2 1.9.8 2.9.2q1.4-.1 2.8-.4zm9.8-1.6q0-.7-.6-1.2t-1.4-.5q.7-.1 1.2-.6t.4-1q0-.8-.6-1.2t-1.4-.5H16.9v6.8h6.6q.9 0 1.6-.5t.6-1.3zm1.7-10.2v17.2q0 .7-.5 1.2t-1.2.5H-1.7q-.7 0-1.2-.5t-.5-1.2V3.4q0-.7.5-1.2t1.2-.5h27.4q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;