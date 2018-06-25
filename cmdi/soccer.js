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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 1c1.8 0 3.4.5 4.8 1.4l-.3.6H12l-1.7-.8.3-1.1c.5 0 .9-.1 1.4-.1zm-2.5.4l-.3 1-2.6 1.3-1.2.2c1.1-1.2 2.5-2.1 4.1-2.5zM13 6h3l2.7 3.6-1.3 2.6-2.6.6-3.3-3.9L13 6zm-6.8.7L7 10l-1.2 3.1-2.6.8c-.1-.6-.2-1.2-.2-1.9 0-1.9.6-3.6 1.6-5.1l1.6-.2zm14.4 2.5c.2.9.4 1.8.4 2.8 0 1.4-.4 2.8-1 4h-1l-.8-3.3 1.5-3 .9-.5zM8 10h3l2.8 3.3L12 16l-3.2.8-2.3-3.1L8 10zm4 7l3 2-.9 1.7c-.7.2-1.4.3-2.1.3-1.7 0-3.4-.5-4.7-1.4l1.1-1.7L12 17zm7 0h.5c-1 1.5-2.5 2.7-4.2 3.3L16 19l3-2z' })
    )
  );
};

exports.default = Icon;