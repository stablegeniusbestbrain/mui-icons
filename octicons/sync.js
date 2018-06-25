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
      _react2.default.createElement('path', { d: 'M18.4 11.1a6.2 6.2 0 0 1-1.8 5.4 6.5 6.5 0 0 1-8.2.8l1.8-1.7-6.4-.9.9 6.3 1.9-1.9c3.6 2.6 8.6 2.4 11.8-.8a8.8 8.8 0 0 0 2.6-6.7l-2.6-.5zm-11-3.6a6.5 6.5 0 0 1 8.2-.8l-1.8 1.7 6.5.9-.9-6.3-2 1.9c-3.6-2.6-8.6-2.4-11.8.8C3.8 7.5 2.9 10 3 12.4l2.6.5a6.3 6.3 0 0 1 1.8-5.4z' })
    )
  );
};

exports.default = Icon;