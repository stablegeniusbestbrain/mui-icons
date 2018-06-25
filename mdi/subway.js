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
      _react2.default.createElement('circle', { cx: '15.5', cy: '16', r: '1' }),
      _react2.default.createElement('circle', { cx: '8.5', cy: '16', r: '1' }),
      _react2.default.createElement('path', { d: 'M7 9h10v5H7zm10.8-6.2C16 2.1 13.9 2 12 2s-4 .1-5.8.8C3.5 3.8 2 6 2 8.9V22h20V8.9c0-2.9-1.5-5.1-4.2-6.1zm.2 13.1c0 1.4-1.2 2.6-2.6 2.6l1.1 1.1v.4H15l-1.5-1.5h-2.8L9.2 20H7.5v-.4l1.1-1.1c-1.4 0-2.6-1.2-2.6-2.6V9c0-2.6 3-3 6-3 3.3 0 6 .4 6 3v6.9z' })
    )
  );
};

exports.default = Icon;