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
      _react2.default.createElement('path', { d: 'M24 11.7l-1.5-8.9C22.3.8 19.7 0 18 0H8.5c-.3 0-.5.1-.8.2L5.6 1.5H3c-1.6 0-3 1.4-3 3v6c0 1.6 1.4 3 3 3h3c1.4 0 2.1.7 3.6 2.3 1.4 1.5 1.3 2.7.9 4.9-.1.8.1 1.5.7 2.2.5.7 1.4 1.1 2.3 1.1 2.7 0 4.5-5.6 4.5-7.5V15h3c1.8 0 3-1.2 3-2.9v-.4zm-3 1.8h-3c-1 0-1.5.5-1.5 1.5v1.5c0 1.9-1.7 6-3 6-.7 0-1.6-.7-1.5-1.5.4-2.3.5-4.1-1.3-6.2C9.2 13.1 8 12 6 12V3l2.5-1.5H18c1.1 0 2.9.5 3 1.5l1.5 9c0 1-.5 1.5-1.5 1.5z' })
    )
  );
};

exports.default = Icon;