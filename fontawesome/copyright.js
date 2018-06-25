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
      _react2.default.createElement('path', { d: 'M17.1 14.4v1.4q0 .7-.5 1.2t-1.2.8-1.6.5-1.6.1q-2.7 0-4.6-1.8t-1.8-4.7q0-2.7 1.8-4.5t4.5-1.8h1.1q.6 0 1.2.3t1.2.4 1 .8.3 1.1v1.4q0 .2-.2.2h-1.6q-.2 0-.2-.2v-.9q0-.6-.8-.9t-1.9-.3q-1.9 0-3 1.2T8 11.9q0 2 1.2 3.3t3.1 1.3q.9 0 1.9-.3t.9-.9v-.9q0-.1.1-.2t.1 0H17l.1.2zM12 3.4q-1.7 0-3.3.7T5.9 5.9 4.1 8.7 3.4 12t.7 3.3 1.8 2.8 2.8 1.8 3.3.7 3.3-.7 2.8-1.8 1.8-2.8.7-3.3-.7-3.3-1.8-2.8-2.8-1.8-3.3-.7zM22.3 12q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;