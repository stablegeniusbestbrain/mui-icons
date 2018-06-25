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
      _react2.default.createElement('path', { d: 'M13 18h1c.6 0 1 .4 1 1h.7L13 16.3V18zm9 1v1.2L20.8 19H22zm-1 2.7L19.7 23l-2-2H15c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h2.7l-2-2H4c-.6 0-1-.4-1-1v-.7l-2-2L2.3 3 21 21.7zM4 2h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H9.8L7 5.2V4H5.8l-2-2H4zm16 8c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-2.2l-6-6H20zM9 6h1V4H9v2zm0 8h1v-.7l-1-1V14zm-4-2v2h2v-2H5z' })
    )
  );
};

exports.default = Icon;