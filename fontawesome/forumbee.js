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
      _react2.default.createElement('path', { d: 'M14.2 2Q10 3.6 6.8 6.9T2 14.4q-.3-1.2-.3-2.4 0-2.8 1.4-5.1t3.7-3.8T12 1.8q1.1 0 2.2.2zm3.6 1.6q1.3.9 2.2 2.1-5.2 1.5-9 5.3t-5.3 9.1q-1.3-1-2.1-2.2 1.5-5.1 5.3-9t8.9-5.3zM8 21.5q1.5-4.8 5.1-8.4T21.4 8q.5 1.2.7 2.6-3.9 1.6-6.9 4.6t-4.6 7Q9.2 22 8 21.5zm14.3.7q-2.6-.6-4.9-1.5-1.8 1.1-3.9 1.4 1.4-2.7 3.7-4.9t4.9-3.7q-.3 2-1.4 3.8.9 2.3 1.6 4.9z' })
    )
  );
};

exports.default = Icon;