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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1.4 16.1V20h-2.7v-1.9c-1.7-.4-3.1-1.5-3.2-3.4h1.9c.1 1 .9 1.8 2.7 1.8 1.9 0 2.4-.9 2.4-1.6 0-.8-.5-1.6-2.7-2.1-2.5-.6-4.2-1.6-4.2-3.7 0-1.7 1.4-2.8 3.1-3.2V4h2.7v2c1.9.4 2.8 1.8 2.9 3.3h-2c0-1.1-.6-1.8-2.2-1.8-1.5 0-2.4.7-2.4 1.6 0 .8.6 1.4 2.6 1.9s4.2 1.4 4.2 3.9c0 1.9-1.3 2.9-3.1 3.2z' })
    )
  );
};

exports.default = Icon;