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
      _react2.default.createElement('path', { d: 'M12.5 2c-1.7 0-3 3.3-3 5s1.3 3 3 3 3-1.3 3-3-1.3-5-3-5zm0 4.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM10 11c-.6 0-1 .4-1 1v8H7c-.6 0-1-.4-1-1v-1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.7 1.3 3 3 3h12c.6 0 1-.4 1-1s-.4-1-1-1h-3v-8c0-.6-.4-1-1-1h-5z' })
    )
  );
};

exports.default = Icon;