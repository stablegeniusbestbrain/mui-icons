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
      _react2.default.createElement('path', { d: 'M15 1.8V3l.8 1.5L9 9H3.3c-.7 0-1 .8-.5 1.3L7.5 15l-6 7.5 7.5-6 4.7 4.7a.8.8 0 0 0 1.3-.5V15l4.5-6.7L21 9h1.2c.7 0 1-.8.5-1.3l-6.4-6.4a.8.8 0 0 0-1.3.5z' })
    )
  );
};

exports.default = Icon;