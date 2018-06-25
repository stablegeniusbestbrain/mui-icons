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
      _react2.default.createElement('path', { d: 'M15 18.9l-2.6-6c-1 2-2.1 4.1-3.1 6 0 .1-.5.1-.5 0-1.4-3.4-3-6.8-4.4-10.2C4 7.8 2.8 6.5 2 6.5V6h5.1v.5c-.6 0-1.7.4-1.4 1.1.7 1.5 3.2 7.5 3.9 9 .5-1 1.8-3.4 2.4-4.5-.4-.9-1.9-4.2-2.3-5-.3-.5-1.1-.6-1.7-.6v-.4h4.4v.4c-.6 0-1.2.2-.9.8.6 1.2.9 2.1 1.5 3.3.2-.4 1.1-2.2 1.5-3.2.3-.6-.1-.9-1.2-.9v-.4h3.8l.1.4c-.8 0-1.5.4-1.9 1l-1.8 3.8c.2.5 2 4.5 2.2 4.9l3.8-8.8c-.3-.7-1.2-.9-1.5-.9v-.4h4v.4c-.9 0-1.4.5-1.7 1.2-.8 1.8-3.3 7.5-4.9 11.3H15z' })
    )
  );
};

exports.default = Icon;