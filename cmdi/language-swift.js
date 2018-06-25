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
      _react2.default.createElement('path', { d: 'M17.1 19.7c-2.4 1.4-5.6 1.5-8.9.1-2.6-1.1-4.8-3.1-6.2-5.3.7.6 1.5 1 2.3 1.4 3.4 1.6 6.7 1.5 9.1 0-3.4-2.6-6.2-6-8.4-8.7-.4-.5-.8-1-1.1-1.5 8.3 6 7.9 7.6 2.4-1 4.9 4.9 9.5 7.7 9.5 7.7.1.1.2.2.3.2.1-.2.2-.5.3-.7.8-2.9-.1-6.2-2.1-8.9 4.5 2.8 7.2 8 6.1 12.3v.4c2.2 2.8 1.6 5.8 1.3 5.2-1.2-2.4-3.5-1.7-4.6-1.2z' })
    )
  );
};

exports.default = Icon;