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
      _react2.default.createElement('path', { d: 'M12.5 5.5c-.3 0-.5.2-.5.5s.2.5.5.5c1.1 0 2 .9 2 2 0 .2.2.5.5.5s.5-.3.5-.5c0-1.7-1.4-3-3-3zm0-4.5C8.4 1 5 4.4 5 8.5c0 1.5.4 2.9 1.3 4.2l.1.1c1.8 2.6 2.1 3.4 2.1 4.2v3c0 .6.4 1 1 1h2c0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7h2c.6 0 1-.4 1-1v-3c0-.8.3-1.6 2.1-4.2.9-1.3 1.4-2.8 1.4-4.3C20 4.4 16.6 1 12.5 1zm2 18h-4v-1h4v1zm2.5-7.3c-1.5 2-2.1 3.2-2.4 4.3h-1.1v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-1.1c-.3-1-.9-2.2-2.3-4.2l-.1-.1c-.7-1-1-2.1-1-3.2C7 5.5 9.5 3 12.5 3S18 5.5 18 8.5c0 1.1-.3 2.2-1 3.2z' })
    )
  );
};

exports.default = Icon;