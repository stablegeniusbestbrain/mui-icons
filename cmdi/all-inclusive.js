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
      _react2.default.createElement('path', { d: 'M18.6 6.6c-1.4 0-2.8.6-3.8 1.6l-7 6.2c-.6.6-1.5 1-2.4 1C3.5 15.4 2 13.9 2 12s1.5-3.4 3.4-3.4c.9 0 1.8.4 2.4 1.1l1.2 1 1.5-1.4-1.3-1.1c-1-1-2.4-1.6-3.8-1.6C2.4 6.6 0 9 0 12s2.4 5.4 5.4 5.4c1.4 0 2.8-.6 3.8-1.6l7-6.2c.6-.6 1.5-1 2.4-1 1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4c-.9 0-1.8-.4-2.4-1.1l-1.2-1-1.5 1.4 1.3 1.1c1 1 2.3 1.6 3.8 1.6 3 0 5.4-2.4 5.4-5.4 0-3-2.4-5.4-5.4-5.4z' })
    )
  );
};

exports.default = Icon;