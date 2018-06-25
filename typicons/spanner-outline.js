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
      _react2.default.createElement('circle', { cx: '8', cy: '16', r: '1' }),
      _react2.default.createElement('path', { d: 'M20.7 4.7c-.4-.4-1-.4-1.4 0 .4-.4.4-1 0-1.4-1-.8-2.4-1.3-3.8-1.3C11.9 2 9 4.9 9 8.5v.4c-.3.2-2.9 2.1-4.2 3.3C3.6 13.2 3 14.6 3 16c0 2.8 2.2 5 5 5 1.5 0 2.9-.6 3.8-1.8 1.2-1.4 3.1-3.9 3.3-4.2h.4c3.6 0 6.5-2.9 6.5-6.5 0-1.4-.5-2.8-1.3-3.8zM8 19c-1.7 0-3-1.3-3-3 0-.9.4-1.7 1.1-2.3 2.3-2 3.6-2.7 5.1-4-.1-.4-.2-.8-.2-1.2C11 6 13 4 15.5 4c.5 0 .9.1 1.3.2L14 7l.5 2.5 2.5.5 2.8-2.7c.1.4.2.8.2 1.2 0 2.5-2 4.5-4.5 4.5-.4 0-.8-.1-1.2-.2-1.3 1.5-2 2.8-4 5.1-.6.7-1.4 1.1-2.3 1.1zM19.4 6.3l-2.7 2.6-1.4-.2-.2-1.4 2.7-2.6c.7.4 1.2.9 1.6 1.6z' })
    )
  );
};

exports.default = Icon;