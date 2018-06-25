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
      _react2.default.createElement('path', { d: 'M2 4.3L3.3 3l18.2 18.2-1.3 1.3-2-2c-.1.1-.3.2-.4.3-1.8.8-3.9-.9-5.9-.9-2 0-4.1 1.7-5.9.9-1-.5-1.7-1.8-1.6-2.9.2-1.5 2-2.3 3.1-3.4.7-.7 1.3-1.8 2.1-2.7L2 4.3zM8.3 3c1.2-.2 2.5 1.1 2.8 2.9.2.9.2 1.7-.1 2.3l-4-4c.3-.6.8-1.1 1.3-1.2zm7.2 0c1.2.2 1.9 1.8 1.5 3.5-.4 1.8-1.6 3.1-2.8 2.9-1.2-.1-1.8-1.7-1.5-3.5.4-1.8 1.6-3.1 2.8-2.9zM3 7.6c1.1-.5 2.7.4 3.5 2 .8 1.5.5 3.2-.6 3.7-1.2.5-2.7-.4-3.5-2-.8-1.5-.5-3.2.6-3.7zm18 0c1.1.5 1.4 2.2.6 3.7-.8 1.6-2.3 2.5-3.5 2-1.1-.5-1.4-2.2-.6-3.7.8-1.6 2.4-2.5 3.5-2z' })
    )
  );
};

exports.default = Icon;