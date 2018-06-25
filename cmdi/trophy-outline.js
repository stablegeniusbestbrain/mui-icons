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
      _react2.default.createElement('path', { d: 'M2 2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.1c-2.2.2-3 1.3-3 2.6v.3h8v-.3c0-1.3-.8-2.4-3-2.6V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2h-4c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2zm2 2h2v7H4V4zm14 0h2v7h-2V4zM8 6h8v5.5c0 1.9-.6 3.5-4 3.5s-4-1.6-4-3.5V6z' })
    )
  );
};

exports.default = Icon;