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
      _react2.default.createElement('path', { d: 'M12 16c-1.7 0-3-1.3-3-3 0-1.1.6-2.1 1.5-2.6l9.7-5.6-5.5 9.6c-.5.9-1.5 1.6-2.7 1.6zm0-13c1.8 0 3.5.5 5 1.3l-2.1 1.2C14 5.2 13 5 12 5c-4.4 0-8 3.6-8 8 0 2.2.9 4.2 2.3 5.7v-.1c.4.4.4 1.1 0 1.5-.3.4-1 .4-1.4 0C3.1 18.3 2 15.8 2 13 2 7.5 6.5 3 12 3zm10 10c0 2.8-1.1 5.3-2.9 7.1-.4.4-1 .4-1.4 0-.4-.4-.4-1.1 0-1.5v.1c1.4-1.5 2.3-3.5 2.3-5.7 0-1-.2-2-.5-2.9L20.7 8c.8 1.5 1.3 3.2 1.3 5z' })
    )
  );
};

exports.default = Icon;