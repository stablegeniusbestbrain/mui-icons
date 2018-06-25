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
      _react2.default.createElement('path', { d: 'M22 2s-7.6-.4-13.7 7.9C3.7 16.2 2 22 2 22l1.9-1c1.5-2.5 2.2-3.5 3.6-5 2.6.7 5.2.6 7.5-2-2-.6-3.6-.4-6-.2 2.7-1.8 4.5-2.2 7-1.8l1-2c-1.8-.3-3-.4-4.8 0 2-1.3 3.4-2.1 5.8-2l1.2-1.9c-1.6-.1-2.5 0-4.3.5 1.6-1.5 3.1-2.1 5.2-2.3 0 0 1.1-1.9 1.9-2.3z' })
    )
  );
};

exports.default = Icon;