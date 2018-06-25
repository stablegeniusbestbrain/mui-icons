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
      _react2.default.createElement('path', { d: 'M16.9 21q-2.3 1.3-4.9 1.3-2.7 0-5-1.3 1.9-1.1 3.2-2.8t1.8-3.6q.4 1.9 1.7 3.6t3.2 2.8zM10.3 1.9v6.5q0 3.4-1.7 6.2t-4.5 4.1Q1.7 15.8 1.7 12q0-2.5 1.1-4.7t3.1-3.6 4.4-1.8zm12 10.1q0 3.8-2.4 6.7-2.8-1.4-4.5-4.1t-1.7-6.2V1.9q2.4.4 4.4 1.8t3.1 3.6 1.1 4.7z' })
    )
  );
};

exports.default = Icon;