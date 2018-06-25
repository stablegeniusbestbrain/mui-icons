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
      _react2.default.createElement('path', { d: 'M18 0H6C4.3 0 3 1.3 3 3v18c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-4 22h-4v-1h4v1zm5.3-3H4.8V3h14.5v16z' })
    )
  );
};

exports.default = Icon;