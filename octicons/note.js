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
      _react2.default.createElement('path', { d: 'M6 15h6v-1.5H6V15zm0-3h9v-1.5H6V12zm0-3h12V7.5H6V9zm15 9H3V4.5h18V18zM3 3c-.8 0-1.5.7-1.5 1.5V18c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5V4.5c0-.8-.7-1.5-1.5-1.5H3z' })
    )
  );
};

exports.default = Icon;