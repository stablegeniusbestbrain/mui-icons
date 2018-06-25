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
      _react2.default.createElement('path', { d: 'M12.5 6.9c1.8 0 2.4.9 2.5 2.1h2.2c-.1-1.7-1.1-3.3-3.2-3.8V3h-3v2.2c-.5.1-1 .3-1.5.5L11 7.2c.4-.2.9-.3 1.5-.3zM5.3 4.1L4.1 5.3l3.4 3.5c0 2 1.6 3.2 3.9 3.9l3.5 3.5c-.3.5-1 .9-2.4.9-2.1 0-2.9-.9-3-2.1H7.3c.1 2.2 1.8 3.4 3.7 3.8V21h3v-2.1c1-.2 1.8-.6 2.4-1.2l2.3 2.2 1.2-1.2L5.3 4.1z' })
    )
  );
};

exports.default = Icon;