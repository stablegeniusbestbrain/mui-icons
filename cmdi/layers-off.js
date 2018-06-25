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
      _react2.default.createElement('path', { d: 'M3.3 1L2 2.3l4.2 4.2L3 9l1.6 1.3L12 16l2.1-1.6 1.4 1.4-3.5 2.7-7.4-5.7L3 14.1l9 7 4.9-3.9 3.8 3.8 1.3-1.3L3.3 1zm16.1 9.3L21 9l-9-7-2.9 2.3 7.9 7.8 2.4-1.8zm.4 4.7l1.2-.9-1.4-1.5-1.2 1 1.4 1.4z' })
    )
  );
};

exports.default = Icon;