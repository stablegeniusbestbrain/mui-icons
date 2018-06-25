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
      _react2.default.createElement('path', { d: 'M12 13L2 6.8V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v.8L12 13zm10 5c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9.1l2 1.3V18h16v-7.6l2-1.3V18z' })
    )
  );
};

exports.default = Icon;