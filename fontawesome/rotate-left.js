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
      _react2.default.createElement('path', { d: 'M22.3 12q0 2.1-.8 4t-2.2 3.3-3.3 2.2-4 .8q-2.3 0-4.4-1t-3.5-2.7q-.1-.2-.1-.3t.1-.3l1.8-1.8q.2-.2.4-.2.2.1.3.2 1 1.3 2.4 2t3 .7q1.4 0 2.7-.6t2.1-1.5 1.5-2.1.6-2.7-.6-2.7-1.5-2.1-2.1-1.5-2.7-.6q-1.3 0-2.5.5T7.3 7l1.9 1.8q.4.4.2 1-.3.5-.8.5h-6q-.4 0-.6-.3t-.3-.6v-6q0-.5.5-.8.6-.2 1 .2l1.7 1.8q1.4-1.4 3.3-2.1t3.8-.8q2.1 0 4 .8t3.3 2.2T21.5 8t.8 4z' })
    )
  );
};

exports.default = Icon;