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
      _react2.default.createElement('path', { d: 'M8.5 7h2L16 21h-2.4l-1.1-3H6.3l-1.1 3H3L8.5 7zm-1.4 9h4.8L9.5 9.7 7.1 16zM22 5v2h-3v3h-2V7h-3V5h3V2h2v3h3z' })
    )
  );
};

exports.default = Icon;