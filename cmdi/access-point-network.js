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
      _react2.default.createElement('path', { d: 'M4.9 2.9C3.1 4.7 2 7.2 2 10s1.1 5.3 2.9 7.1l1.4-1.4C4.9 14.2 4 12.2 4 10s.9-4.2 2.3-5.7L4.9 2.9zm14.2 0l-1.4 1.4C19.1 5.8 20 7.8 20 10s-.9 4.2-2.3 5.7l1.4 1.4c1.8-1.8 2.9-4.3 2.9-7.1s-1.1-5.3-2.9-7.1zM7.8 5.8C6.7 6.8 6 8.3 6 10c0 1.7.7 3.2 1.8 4.2l1.4-1.4C8.4 12.1 8 11.1 8 10c0-1.1.4-2.1 1.2-2.8L7.8 5.8zm8.4 0l-1.4 1.4c.8.7 1.2 1.7 1.2 2.8 0 1.1-.4 2.1-1.2 2.8l1.4 1.4c1.1-1 1.8-2.5 1.8-4.2 0-1.7-.7-3.2-1.8-4.2zM12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 6v4h-1c-.6 0-1 .4-1 1H2v2h7c0 .6.4 1 1 1h4c.6 0 1-.4 1-1h7v-2h-7c0-.6-.4-1-1-1h-1v-4h-2z' })
    )
  );
};

exports.default = Icon;