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
      _react2.default.createElement('path', { d: 'M1.5 6v12c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5H3c-.8 0-1.5.7-1.5 1.5zM21 6l-9 7.5L3 6h18zM3 8.3l6 4.5-6 4.5v-9zM4.5 18l5.3-4.5 2.2 2.3 2.3-2.3 5.2 4.5h-15zm16.5-.7l-6-4.5 6-4.5v9z' })
    )
  );
};

exports.default = Icon;