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
      _react2.default.createElement('path', { d: 'M3 12.9l5.3 3.5 3.7-3.1L6.7 10zm5.3-9.3L3 7.1 6.7 10 12 6.7zM21 7.1l-5.3-3.5L12 6.7l5.3 3.3zm-9 6.2l3.7 3.1 5.3-3.5-3.7-2.9zm0 1.2l-3.7 3.1-1.6-1.1v1.2l5.3 3.2 5.3-3.2v-1.2l-1.6 1.1z' })
    )
  );
};

exports.default = Icon;