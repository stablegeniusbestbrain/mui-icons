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
      _react2.default.createElement('path', { d: 'M19.1 7.5c1.6 0 2.9 1.3 2.9 2.9v3.7c0 1.6-1.3 2.9-2.9 2.9H12c0 .4.3 1 .7 1H17v1.6c0 1.6-1.3 2.9-2.9 2.9H9.9c-1.6 0-2.9-1.3-2.9-2.9v-3.7C7 14.3 8.3 13 9.9 13h5.2c1.6 0 2.9-1.2 2.9-2.8V7.5h1.1zm-4.2 11.8c-.4 0-.8.3-.8.9 0 .6.4.7.8.7s.7-.1.7-.7-.3-.9-.7-.9zm-10-1.8c-1.6 0-2.9-1.3-2.9-2.9v-3.7C2 9.3 3.3 8 4.9 8H12c0-.4-.3-1-.7-1H7V5.4c0-1.6 1.3-2.9 2.9-2.9h4.2c1.6 0 2.9 1.3 2.9 2.9v3.7c0 1.6-1.3 2.9-2.9 2.9H8.9C7.3 12 6 13.2 6 14.8v2.7H4.9zM9.1 5.7c.4 0 .8-.3.8-.9 0-.6-.4-.7-.8-.7s-.7.1-.7.7.3.9.7.9z' })
    )
  );
};

exports.default = Icon;