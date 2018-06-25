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
      _react2.default.createElement('path', { d: 'M10.6.5c1.2 3.2.6 5-.8 6.4C8.3 8.5 6 9.7 4.3 12c-2.1 3-2.5 9.8 5.3 11.5-3.3-1.7-4-6.8-.4-9.9-.9 3.1.8 5 2.9 4.3 2.1-.7 3.5.8 3.4 2.5 0 1.2-.5 2.2-1.7 2.7 5.1-.9 7.2-5.1 7.2-8.3 0-4.3-3.8-4.9-1.9-8.4-2.3.2-3 1.7-2.8 4.1.1 1.6-1.6 2.7-2.8 2-1-.6-1-1.8-.1-2.7C15.3 8 16 3.7 10.6.5l-.1-.1.1.1z' })
    )
  );
};

exports.default = Icon;