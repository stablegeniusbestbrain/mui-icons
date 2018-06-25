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
      _react2.default.createElement('path', { d: 'M17 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM1 2h3.3l.9 2H20c.6 0 1 .4 1 1 0 .2 0 .3-.1.5L17.3 12c-.3.6-1 1-1.7 1H8.1l-.9 1.6v.1c0 .2.1.3.2.3H19v2H7c-1.1 0-2-.9-2-2 0-.4.1-.7.2-1l1.4-2.4L3 4H1V2zm6 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9-7l2.8-5H6.1l2.4 5H16z' })
    )
  );
};

exports.default = Icon;