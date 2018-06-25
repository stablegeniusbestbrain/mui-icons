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
      _react2.default.createElement('path', { d: 'M1.5 6.4v11.2c0 .7.4 1.3 1.1 1.5l9.8 2.6h.7l9.8-2.6c.7-.2 1.1-.8 1.1-1.5V6.4c0-.7-.4-1.3-1.1-1.5l-9.8-2.6a2.1 2.1 0 0 0-.7 0L2.6 4.9c-.7.2-1.1.8-1.1 1.5zM12 20l-9-2.3V7.5l9 2.4V20zM3 6l3.8-1 9.7 2.6-3.7 1L3 6zm19.5 11.7l-9 2.3V9.9l3-.8v3.7l3-.8V8.3l3-.8v10.2zm-3-10.9L9.8 4.2l3-.8L22.5 6l-3 .8z' })
    )
  );
};

exports.default = Icon;