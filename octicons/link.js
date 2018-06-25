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
      _react2.default.createElement('path', { d: 'M6 13.5h1.5V15H6c-2.2 0-4.5-2.5-4.5-5.2S3.8 4.5 6 4.5h6c2.2 0 4.5 2.5 4.5 5.3 0 2.1-1.4 4-3 4.8v-1.7c.9-.7 1.5-1.9 1.5-3.1 0-2-1.5-3.8-3-3.8H6C4.5 6 3 7.8 3 9.8s1.5 3.7 3 3.7zM19.5 9H18v1.5h1.5c1.5 0 3 1.8 3 3.8S21 18 19.5 18h-6c-1.5 0-3-1.8-3-3.7 0-1.3.6-2.5 1.5-3.2V9.4c-1.6.8-3 2.7-3 4.9 0 2.7 2.3 5.2 4.5 5.2h6c2.2 0 4.5-2.5 4.5-5.2S21.8 9 19.5 9z' })
    )
  );
};

exports.default = Icon;