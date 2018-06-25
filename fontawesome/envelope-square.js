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
      _react2.default.createElement('path', { d: 'M18.4 1.7q1.6 0 2.8 1.1t1.1 2.8v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8zm.5 14.2V10q-.5.5-.9.8-.5.2-1.8 1.1t-2 1.3q-1.3.9-2.2.9t-2.2-.9q-.6-.4-1.9-1.2T6 10.7q-.2-.1-.4-.3t-.5-.4v5.9q0 .5.4.9t.9.3h11.2q.5 0 .9-.3t.4-.9zm0-7.7q0-.6-.4-1t-.9-.3H6.4q-.5 0-.9.3t-.4.9q0 .5.5 1.1t.9.8q.6.5 1.8 1.2t1.7 1.1q.1.1.3.2t.2.2.3.2.3.1.3.2.3.1.3 0 .3 0 .3-.1.3-.2.3-.1.3-.2.2-.2.3-.2l3.5-2.3q.5-.3.9-.8t.5-1z' })
    )
  );
};

exports.default = Icon;