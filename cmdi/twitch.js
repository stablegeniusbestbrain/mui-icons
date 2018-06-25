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
      _react2.default.createElement('path', { d: 'M4 2h18v12l-5 5h-4l-3 3H7v-3H2V6l2-4zm16 11V4H6v12h3v3l3-3h5l3-3zm-5-6h2v5h-2V7zm-3 0v5h-2V7h2z' })
    )
  );
};

exports.default = Icon;