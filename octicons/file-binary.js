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
      _react2.default.createElement('path', { d: 'M9 18h1.5v1.5H6V18h1.5v-3H6v-1.5h3V18zM21 6.8V21c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5V3c0-.8.7-1.5 1.5-1.5h11.3L21 6.8zm-1.5.7L15 3H4.5v18h15V7.5zM15 6h-3v1.5h1.5v3H12V12h4.5v-1.5H15V6zM6 6h4.5v6H6V6zm1.5 4.5H9v-3H7.5v3zm4.5 3h4.5v6H12v-6zm1.5 4.5H15v-3h-1.5v3z' })
    )
  );
};

exports.default = Icon;