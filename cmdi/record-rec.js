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
      _react2.default.createElement('path', { d: 'M12.5 5C8.4 5 5 8.4 5 12.5S8.4 20 12.5 20s7.5-3.4 7.5-7.5S16.6 5 12.5 5zM7 10h2c.5 0 1 .4 1 1v1c0 .5-.4.9-.9 1l1.2 2H9.2L8 13v2H7m5-5h2v1h-2v1h2v1h-2v1h2v1h-2c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1zm4 0h2v1h-2v3h2v1h-2c-.5 0-1-.4-1-1v-3c0-.6.5-1 1-1zm-8 1v1h1v-1' })
    )
  );
};

exports.default = Icon;