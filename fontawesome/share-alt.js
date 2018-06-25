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
      _react2.default.createElement('path', { d: 'M18 13.7q1.8 0 3 1.3t1.3 3-1.3 3-3 1.3-3-1.3-1.3-3v-.5l-4.8-2.4Q7.7 16.3 6 16.3q-1.8 0-3-1.3t-1.3-3T3 9t3-1.3q1.7 0 2.9 1.2l4.8-2.4V6q0-1.8 1.3-3t3-1.3T21 3t1.3 3T21 9t-3 1.3q-1.7 0-2.9-1.2l-4.8 2.4v1l4.8 2.4q1.2-1.2 2.9-1.2z' })
    )
  );
};

exports.default = Icon;