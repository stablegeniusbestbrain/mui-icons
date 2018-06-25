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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 6.4c1.6 1 3.4 1.6 5.4 1.6.8 0 1.5-.1 2.3-.3.2.7.3 1.5.3 2.3 0 4.4-3.6 8-8 8-3 0-5.6-1.7-7-4.1L6.7 14v-1c0-.7.6-1.3 1.3-1.3.7 0 1.2.6 1.2 1.3v1H12m4-2.3c-.7 0-1.2.6-1.2 1.3 0 .7.5 1.2 1.2 1.2s1.3-.5 1.3-1.2-.6-1.3-1.3-1.3z' })
    )
  );
};

exports.default = Icon;