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
      _react2.default.createElement('path', { d: 'M4 10c-.6 0-1-.4-1-1s.4-1 1-1h8c1.1 0 2-.9 2-2s-.9-2-2-2c-.6 0-1.1.2-1.4.6-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4C9.9 2.4 10.9 2 12 2c2.2 0 4 1.8 4 4s-1.8 4-4 4H4zm15 2c.6 0 1-.4 1-1s-.4-1-1-1c-.3 0-.5.1-.7.3-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4.5-.6 1.3-.9 2.1-.9 1.7 0 3 1.3 3 3s-1.3 3-3 3H5c-.6 0-1-.4-1-1s.4-1 1-1h14zm-1 6H4c-.6 0-1-.4-1-1s.4-1 1-1h14c1.7 0 3 1.3 3 3s-1.3 3-3 3c-.8 0-1.6-.3-2.1-.9-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .2.2.4.3.7.3.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;