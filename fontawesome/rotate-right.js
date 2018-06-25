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
      _react2.default.createElement('path', { d: 'M22.3 3.4v6q0 .4-.3.6t-.6.3h-6q-.5 0-.8-.5-.2-.6.2-1L16.7 7q-2-1.9-4.7-1.9-1.4 0-2.7.6T7.2 7.2 5.7 9.3 5.1 12t.6 2.7 1.5 2.1 2.1 1.5 2.7.6q1.6 0 3-.7t2.4-2q.1-.1.3-.2.2 0 .4.2l1.8 1.8q.1.1.1.3t-.1.3q-1.4 1.7-3.5 2.7t-4.4 1q-2.1 0-4-.8t-3.3-2.2T2.5 16t-.8-4 .8-4 2.2-3.3T8 2.5t4-.8q2 0 3.8.8t3.3 2.1l1.7-1.8q.4-.4 1-.2.5.3.5.8z' })
    )
  );
};

exports.default = Icon;