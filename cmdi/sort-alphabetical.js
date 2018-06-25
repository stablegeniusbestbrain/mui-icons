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
      _react2.default.createElement('path', { d: 'M9.3 5l3.2-3.2L15.8 5H9.3zm6.5 14l-3.3 3.3L9.3 19h6.5zm-6.9-4.7H6L5.3 17H2.9L6 7h3l3.1 10H9.7l-.8-2.7zm-2.6-1.6h2.3l-.7-2.1-.2-1-.3-1-.2 1-.3 1-.6 2.1zm6.8 4.3v-1.3L17.8 9v-.1h-4.3V7h7.2v1.3L16.1 15v.1h4.7V17h-7.7z' })
    )
  );
};

exports.default = Icon;