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
      _react2.default.createElement('path', { d: 'M22.3 12q0 2.1-.8 4t-2.2 3.3-3.3 2.2-4 .8-4-.8-3.3-2.2T2.5 16t-.8-4q0-2.4 1.1-4.6t3-3.6q.6-.4 1.3-.3t1.1.6q.5.6.4 1.3t-.7 1.1q-1.3 1-2 2.4T5.1 12q0 1.4.6 2.7t1.5 2.1 2.1 1.5 2.7.6 2.7-.6 2.1-1.5 1.5-2.1.6-2.7q0-1.6-.8-3.1t-2-2.4q-.6-.4-.7-1.1t.4-1.3q.4-.6 1.1-.6t1.3.3q1.9 1.5 3 3.6t1.1 4.6zM13.7 1.7v8.6q0 .7-.5 1.2T12 12t-1.2-.5-.5-1.2V1.7q0-.7.5-1.2T12 0t1.2.5.5 1.2z' })
    )
  );
};

exports.default = Icon;