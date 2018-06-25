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
      _react2.default.createElement('path', { d: 'M18.9 8.2q-.8.3-1.7.4.9-.5 1.3-1.5-.9.5-1.8.6-.8-.8-2.1-.8-1.1 0-2 .8t-.8 2q0 .4.1.6-1.7-.1-3.2-.9t-2.6-2q-.4.6-.4 1.4 0 1.5 1.2 2.3-.6 0-1.3-.3 0 1 .6 1.8t1.7 1q-.4.1-.7.1-.2 0-.5-.1.3.9 1 1.4t1.6.6q-1.5 1.2-3.5 1.2-.3 0-.7-.1 2 1.3 4.4 1.3 1.5 0 2.8-.5t2.2-1.2 1.6-1.9 1-2.2.4-2.2v-.4q.8-.6 1.4-1.4zm3.4-2.6v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;