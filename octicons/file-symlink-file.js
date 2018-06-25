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
      _react2.default.createElement('path', { d: 'M15.8 1.5H4.5C3.7 1.5 3 2.2 3 3v18c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5V6.8l-5.2-5.3zM19.5 21h-15V3H15l4.5 4.5V21zM12 6.8l6 4.5-6 4.5v-3c-1.5-.1-2.8.3-3.8 1-1.1.7-1.8 1.9-2.2 3.5 0-2.5.6-4.4 1.7-5.6 1.1-1.3 2.5-1.9 4.3-1.9v-3z' })
    )
  );
};

exports.default = Icon;