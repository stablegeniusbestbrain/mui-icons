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
      _react2.default.createElement('path', { d: 'M12.5 3C7.8 3 4 5.7 4 9c0 1.2.5 2.3 1.4 3.3C4.5 13.5 4 15 4 16.5V20c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-3.5c0-1.2-.3-2.4-1-3.5l2-2-3-3-2.1 2.1C15.6 9.4 14.1 9 12.5 9c-1.8 0-3.6.5-4.9 1.4C7.2 10 7 9.5 7 9c0-1.8 2.5-3.2 5.5-3.2 1.4 0 2.8.3 3.8.9l2.1-2C16.8 3.6 14.7 3 12.5 3zm0 8c.3 0 .7 0 1 .1-3.1.5-5.5 3.2-5.5 6.4V20H6v-2.5c0-3.6 2.9-6.5 6.5-6.5z' })
    )
  );
};

exports.default = Icon;