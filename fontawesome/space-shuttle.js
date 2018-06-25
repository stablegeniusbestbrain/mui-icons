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
      _react2.default.createElement('path', { d: 'M5.7 15q-1.4.9-3.6.9H.4V15h-.8q-.2 0-.3-.3t-.2-.8q0-.3.1-.6-.7-.1-1.3-.2t-.5-.2.5-.3 1.3-.2q-.1-.3-.1-.6 0-.5.2-.8t.3-.3h.8v-.8h1.7q2.2 0 3.6.8h14.9q.6.1 1.5.3t1 .1q1.2.2 2.1.6t1.1.6.3.6-.3.5-1.1.6-2.1.6q-.2 0-1 .2t-1.5.2H5.7zm15-3.4q.7.5.7 1.3t-.7 1.2l1.1.4q.9-.7.9-1.6t-.9-1.7zM5.8 15.2h13.6q-2.9.5-6.1 1.1-.8 0-1.5.3t-1.1.7l-.4.3-3.9 3.8q-.3.4-.9.6t-1.2.3H3l-1.2-6.2h.3q2.1 0 3.7-.9zM2.1 9.6h-.3L3 3.4h1.3q.6 0 1.2.3t.9.6l3.9 3.8q0 .1.1.2t.4.3.7.4.8.3 1 .1l6.1 1.1H5.8q-1.6-.9-3.7-.9z' })
    )
  );
};

exports.default = Icon;