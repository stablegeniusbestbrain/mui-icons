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
      _react2.default.createElement('path', { d: 'M17.8 12.7c-.3-.5-1-1-2.1-.2-1.4 1.1-3.7 1.1-3.7 1.1s-2.3 0-3.7-1.1c-1.1-.8-1.8-.3-2.1.2-.5 1 0 1.5 1.3 2.3 1.1.7 2.6 1 3.5 1.1l-.8.8c-1.1 1.1-2.2 2.2-2.9 3-.5.4-.5 1.2 0 1.6l.1.2c.4.4 1.2.4 1.6 0l3-3 3 3c.4.4 1.2.4 1.6 0l.2-.2c.4-.4.4-1.2 0-1.6l-3-3-.8-.8c.9-.1 2.4-.4 3.5-1.1 1.3-.8 1.8-1.3 1.3-2.3zM12 4.6c1.4 0 2.5 1.1 2.5 2.5 0 1.3-1.1 2.5-2.5 2.5S9.5 8.4 9.5 7.1c0-1.4 1.1-2.5 2.5-2.5zm0 7.5c2.8 0 5.1-2.2 5.1-5S14.8 2 12 2 6.9 4.3 6.9 7.1s2.3 5 5.1 5z' })
    )
  );
};

exports.default = Icon;