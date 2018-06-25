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
      _react2.default.createElement('circle', { cx: '14.5', cy: '10.5', r: '1.25' }),
      _react2.default.createElement('circle', { cx: '9.5', cy: '10.5', r: '1.25' }),
      _react2.default.createElement('path', { d: 'M22.9 12.7c.1-.3.1-.5.1-.7s0-.4-.1-.7c-.2-1.5-1.3-2.7-2.8-3.1-.5-1.2-1.2-2.1-2.2-2.9C16.4 3.9 14.3 3 12 3s-4.4.9-5.9 2.3c-1 .8-1.7 1.8-2.2 2.9-1.5.4-2.6 1.6-2.8 3.1-.1.3-.1.5-.1.7s0 .4.1.7c.2 1.5 1.3 2.7 2.8 3.1.5 1.1 1.2 2.1 2.1 2.9 1.6 1.4 3.7 2.3 6 2.3s4.4-.9 6-2.3c.9-.8 1.6-1.8 2.1-2.9 1.5-.4 2.6-1.6 2.8-3.1zM19 14h-.3c-.2.6-.5 1.3-.8 1.8-1.3 1.9-3.5 3.2-5.9 3.2s-4.6-1.3-5.8-3.2c-.4-.5-.7-1.2-.9-1.8H5c-1.1 0-2-.9-2-2s.9-2 2-2h.3c.2-.6.5-1.3.9-1.8C7.4 6.3 9.6 5 12 5s4.6 1.3 5.9 3.2c.3.5.6 1.2.8 1.8h.3c1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.8 1.8 2.5 3 4.5 3s3.7-1.2 4.5-3h-9z' })
    )
  );
};

exports.default = Icon;