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
      _react2.default.createElement('path', { d: 'M19.9 11.9c-.5.2-.9.2-1.3.2-2.3 0-4-1.6-4-4.3 0-1.4.5-2.1 1.2-2.1s1.2.6 1.2 1.9c0 .7-.2 1.5-.4 2 0 0 .7 1.2 2.7.9.4-.9.6-2.1.6-3.1 0-2.8-1.4-4.4-4-4.4s-4.2 2-4.2 4.7 1.3 5 3.3 6c-.9 1.7-2 3.3-3.1 4.4-2.1-2.5-4-5.9-4.7-12.4H4.1c1.4 10.9 5.6 14.4 6.8 15 .6.4 1.1.4 1.7.1.9-.6 3.6-3.3 5.1-6.5.7 0 1.4 0 2.2-.2v-2.2z' })
    )
  );
};

exports.default = Icon;