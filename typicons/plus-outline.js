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
      _react2.default.createElement('path', { d: 'M12 21c-1.7 0-3-1.3-3-3l.1-3.1L6 15c-1.7 0-3-1.3-3-3s1.3-3 3-3l3.1-.1L9 6c0-1.7 1.3-3 3-3s3 1.3 3 3l.1 2.9L18 9c1.7 0 3 1.3 3 3s-1.3 3-3 3l-2.9-.1L15 18c0 1.7-1.3 3-3 3zm-1-8v5c0 .6.4 1 1 1s1-.4 1-1v-5h5c.6 0 1-.4 1-1s-.4-1-1-1h-5V6c0-.6-.4-1-1-1s-1 .5-1 1v5H6c-.6 0-1 .4-1 1s.5 1 1 1h5z' })
    )
  );
};

exports.default = Icon;