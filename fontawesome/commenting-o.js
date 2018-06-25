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
      _react2.default.createElement('path', { d: 'M8.6 12q0 .7-.5 1.2t-1.2.5-1.3-.5-.5-1.2.5-1.2 1.3-.5 1.2.5.5 1.2zm5.1 0q0 .7-.5 1.2t-1.2.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.2.5.5 1.2zm5.2 0q0 .7-.5 1.2t-1.3.5-1.2-.5-.5-1.2.5-1.2 1.2-.5 1.3.5.5 1.2zM12 5.1q-2.7 0-5.1 1T3.1 8.6 1.7 12q0 1.5 1 2.9t2.7 2.3l1.1.7-.3 1.3q-.3 1.2-1 2.3 2.1-.9 3.7-2.3l.6-.5h.8q.9.2 1.7.2 2.7 0 5.1-1t3.8-2.5 1.4-3.4-1.4-3.4-3.8-2.5-5.1-1zM24 12q0 2.3-1.6 4.3T18 19.4t-6 1.2q-.9 0-1.9-.1-2.7 2.3-6.2 3.2-.7.2-1.5.3h-.1q-.2 0-.4-.1t-.2-.4v-.2-.1l.1-.1.1-.2.1-.1.1-.1q.1-.1.4-.5t.5-.5.4-.5.4-.7.4-.8.3-1q-2.1-1.2-3.3-2.9T0 12q0-1.7 1-3.3t2.5-2.8 3.8-1.8 4.7-.7 4.7.7 3.8 1.8T23 8.7t1 3.3z' })
    )
  );
};

exports.default = Icon;