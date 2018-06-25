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
      _react2.default.createElement('path', { d: 'M20.7 7c-.3.4-.7.7-.7 1 0 .4.3.7.7 1 .4.5.9.9.9 1.4 0 .5-.5 1-1 1.5l-4.2 4.2-1.4-1.4 4.3-4.3-1-.9-1.4 1.4-3.8-3.8L17 3.3c.3-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4zM3 17.3l9.6-9.6 3.7 3.7L6.7 21H3v-3.7z' })
    )
  );
};

exports.default = Icon;