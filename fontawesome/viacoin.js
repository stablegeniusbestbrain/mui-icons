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
      _react2.default.createElement('path', { d: 'M22.3 0l-2.6 6h2.6v2.6h-3.7l-.7 1.7h4.4v2.6h-5.5L12 24 7.2 12.9H1.7v-2.6h4.4l-.7-1.7H1.7V6h2.6L1.7 0h3.4l4.4 10.3h5L18.9 0h3.4zM12 16.3l1.4-3.4h-2.8z' })
    )
  );
};

exports.default = Icon;