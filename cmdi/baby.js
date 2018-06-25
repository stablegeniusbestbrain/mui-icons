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
      _react2.default.createElement('path', { d: 'M18.5 4C19.9 4 21 5.1 21 6.5S19.9 9 18.5 9 16 7.9 16 6.5 17.1 4 18.5 4zm-14 16c-.8 0-1.5-.7-1.5-1.5S3.7 17 4.5 17h7c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-7zm11.6-1l-1.4-4H11l-4.2-4.2S9 8.3 12.5 8.3c3 0 3.3 1 3.6 1.6l2.8 8.1c.3.8-.1 1.6-.9 1.9-.8.3-1.6-.1-1.9-.9z' })
    )
  );
};

exports.default = Icon;