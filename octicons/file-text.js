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
      _react2.default.createElement('path', { d: 'M12 7.5H6V6h6v1.5zM6 12h10.5v-1.5H6V12zm0 3h10.5v-1.5H6V15zm0 3h10.5v-1.5H6V18zM21 6.8V21c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5V3c0-.8.7-1.5 1.5-1.5h11.3L21 6.8zm-1.5.7L15 3H4.5v18h15V7.5z' })
    )
  );
};

exports.default = Icon;