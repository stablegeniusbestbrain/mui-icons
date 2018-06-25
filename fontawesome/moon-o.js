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
      _react2.default.createElement('path', { d: 'M18.6 17.5q-.7.1-1.5.1-2.4 0-4.5-1.2t-3.3-3.3-1.2-4.5q0-2.6 1.4-4.8-2.7.8-4.4 3.1T3.4 12q0 1.7.7 3.3t1.8 2.8 2.8 1.8 3.3.7q1.9 0 3.7-.9t2.9-2.2zm2.7-1.2q-1.2 2.7-3.8 4.4T12 22.3q-2.1 0-4-.8t-3.3-2.2T2.5 16t-.8-4q0-2 .8-3.9t2.1-3.3 3.1-2.2 3.9-.9q.6 0 .8.6.3.5-.2.9-1.1 1.1-1.7 2.4t-.6 3q0 2 .9 3.6t2.7 2.7 3.6 1q1.6 0 3.1-.7.5-.3 1 .1.1.2.2.5t-.1.5z' })
    )
  );
};

exports.default = Icon;