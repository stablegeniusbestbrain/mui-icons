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
      _react2.default.createElement('path', { d: 'M13.1 2.6c-.7-.7-1.7-1.1-2.7-1.1H6.8C4.7 1.5 3 3.2 3 5.3V9c0 .9.4 1.9 1.1 2.6l9.1 9.1c.6.6 1.5.6 2.1 0l6.9-6.9a1.5 1.5 0 0 0 0-2.1l-9.1-9.1zm-8 8c-.5-.4-.7-1-.7-1.7V5.3c0-1.4 1-2.4 2.4-2.4h3.7c.6 0 1.2.2 1.7.7l9.2 9.2-7.1 7.1-9.2-9.3zM6 4.5h3v3H6v-3z' })
    )
  );
};

exports.default = Icon;