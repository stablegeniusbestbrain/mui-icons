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
      _react2.default.createElement('path', { d: 'M17.6 14.2c.2-.6.4-1.4.4-2.2 0-3.3-2.7-6-6-6-.8 0-1.6.2-2.2.4l1.6 1.7c.2-.1.4-.1.6-.1 2.2 0 4 1.8 4 4 0 .2 0 .4-.1.6l1.7 1.6zM12 4c4.4 0 8 3.6 8 8 0 1.3-.4 2.6-.9 3.7l1.4 1.5c1-1.5 1.5-3.3 1.5-5.2 0-5.5-4.5-10-10-10-1.9 0-3.7.5-5.2 1.5l1.5 1.4C9.4 4.3 10.7 4 12 4zM3.3 2.5L2 3.8l2.1 2.1C2.8 7.6 2 9.7 2 12c0 3.7 2 6.9 5 8.6l1-1.7C5.6 17.5 4 15 4 12c0-1.8.6-3.4 1.5-4.7L7 8.8c-.6.9-1 2-1 3.2 0 2.2 1.2 4.1 3 5.2l1-1.7c-1.2-.7-2-2-2-3.5 0-.7.2-1.2.4-1.8l1.6 1.6v.2c0 1.1.9 2 2 2h.2l7.5 7.5 1.3-1.3L4.3 3.5l-1-1z' })
    )
  );
};

exports.default = Icon;