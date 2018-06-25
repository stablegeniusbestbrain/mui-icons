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
      _react2.default.createElement('path', { d: 'M14.7 20.8l2.9-2.8-2.9-2.8 1.4-1.4 2.9 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4-2.8-2.8-2.9 2.8-1.4-1.4zM2 2h18v2h-.1L14 9.9v13l-6-6v-7L2.1 4H2V2zm8 14.1l2 2V9h.1l5-5H4.9l5 5h.1v7.1z' })
    )
  );
};

exports.default = Icon;