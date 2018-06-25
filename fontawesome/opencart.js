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
      _react2.default.createElement('path', { d: 'M17 20.9q0 .9-.7 1.6t-1.5.6-1.6-.6-.6-1.6.6-1.6 1.6-.6 1.5.6.7 1.6zm-10 0q0 .9-.7 1.6t-1.6.6-1.5-.6-.7-1.6.7-1.6 1.5-.6 1.6.6.7 1.6zM-3.4.9q.7.8 1.5 1.4t1.6 1.1 1.8.8 2.2.6 2.7.5 3.3.2 4.1.1 5 .1h3.3q1.4 0 2.4.3t1.7.3.9.6.3.7-.2.8-.8 1-1.2 1.3-1.5 1.4-1.9 1.5Q19.3 15.7 18 17q.4-.7 1-1.5t1.3-1.4 1.2-1.3 1.1-1.3.8-1 .1-1-.6-.7-1.5-.6-2.8-.3-4-.1q-2.3.1-4.2 0t-3.5-.3-2.7-.6T2 6.2.4 5.4t-1.2-.9-.9-1-.7-.9-.5-.9-.5-.8z' })
    )
  );
};

exports.default = Icon;