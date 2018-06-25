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
      _react2.default.createElement('path', { d: 'M17.7 7.9L12 2.3 6.3 7.9c-3.1 3.2-3.1 8.2 0 11.3 1.6 1.6 3.6 2.4 5.7 2.4s4.1-.8 5.7-2.4c3.1-3.1 3.1-8.2 0-11.3zM12 19.6c-1.6 0-3.1-.6-4.2-1.8C6.6 16.7 6 15.2 6 13.6s.6-3.1 1.8-4.3L12 5.1v14.5z' })
    )
  );
};

exports.default = Icon;