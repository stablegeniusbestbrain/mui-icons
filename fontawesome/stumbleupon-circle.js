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
      _react2.default.createElement('path', { d: 'M13.3 11.2l1.2-.3V10q0-1-.8-1.8t-1.8-.7-1.9.7-.7 1.8v3.8q0 .3-.2.5t-.5.2-.4-.2-.2-.5v-1.6H6v1.6q0 1.1.8 1.9t1.8.8q1.1 0 1.9-.8t.8-1.8v-3.8q0-.2.1-.4t.5-.2q.2 0 .4.2t.2.4v.8zm4.5 2.6v-1.6h-2v1.7q0 .3-.2.5t-.5.1q-.2 0-.4-.2t-.2-.4v-1.6l-1.2.3-.8-.4v1.7q0 1 .8 1.8t1.8.8 1.9-.8.8-1.9zm4.5-1.8q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;