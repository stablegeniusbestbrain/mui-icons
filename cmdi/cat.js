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
      _react2.default.createElement('path', { d: 'M12 8l-1.3.1c-.9-1-3.3-3.6-5.7-3.6 0 0-2 3 0 6.9-.6.8-.9 1.3-1 2.3l-1.9.3.2.9 1.7-.2.2.7-1.6.9.5.9 1.4-.9C5.7 18.8 8.6 20 12 20s6.3-1.2 7.5-3.7l1.4.9.5-.9-1.6-.9.2-.7 1.7.2.2-1-1.9-.2c-.1-1-.4-1.5-1-2.3 2-3.9 0-6.9 0-6.9-2.4 0-4.8 2.6-5.7 3.6L12 8zm-3 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm6 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-4 3h2l-.7 1.4c.2.6.8 1.1 1.5 1.1.8 0 1.5-.7 1.5-1.5h.5c0 1.1-.9 2-2 2-.8 0-1.4-.4-1.8-1-.4.6-1 1-1.7 1-1.2 0-2-.9-2-2h.5c0 .8.6 1.5 1.5 1.5.6 0 1.2-.5 1.4-1.1L11 14z' })
    )
  );
};

exports.default = Icon;