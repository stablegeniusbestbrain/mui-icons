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
      _react2.default.createElement('path', { d: 'M15.8 1.5H4.5C3.7 1.5 3 2.2 3 3v18c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5V6.8l-5.2-5.3zM19.5 21h-15V3H15l4.5 4.5V21zm-9-10.5l-2.2 2.3 2.2 2.2-.7 1.5L6 12.8 9.8 9l.7 1.5zM14.3 9l3.7 3.8-3.7 3.7-.8-1.5 2.3-2.2-2.3-2.3.8-1.5z' })
    )
  );
};

exports.default = Icon;