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
      _react2.default.createElement('path', { d: 'M3 17V7h2v10H3zm16 0V7h2v10h-2zm3-8h2v6h-2V9zM0 15V9h2v6H0zm18-3c0 1.9-.9 3.6-2.3 4.7L15 21H9l-.7-4.3C6.9 15.6 6 13.9 6 12c0-1.9.9-3.6 2.3-4.7L9 3h6l.7 4.3C17.1 8.4 18 10.1 18 12zM7.5 12c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5-4.5 2-4.5 4.5z' })
    )
  );
};

exports.default = Icon;