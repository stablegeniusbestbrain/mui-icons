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
      _react2.default.createElement('path', { d: 'M5 3h14l1.7 3c.2.3.3.6.3 1v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-.4.1-.7.3-1L5 3zm.6 1L5 5h14l-.6-1H5.6zM7 12l5 5 5-5h-3v-2h-4v2H7z' })
    )
  );
};

exports.default = Icon;