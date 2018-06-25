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
      _react2.default.createElement('path', { d: 'M21.4 7.6l-4-4c-.7-.8-2-.8-2.8 0-.2.2-.3.4-.4.6-.7 1.4-1.4 2.2-2.3 2.7l-.2.1c-.9.5-2.3 1-4.7 1-.3 0-.5.1-.8.2-.4.2-.8.5-1 1-.2.5-.2 1.1 0 1.6.1.2.2.4.4.6l3.2 3.2L5 20l5.4-3.8 3.2 3.2c.2.2.4.3.6.4.3.1.5.2.8.2s.5-.1.8-.2c.5-.2.8-.5 1-1 .1-.3.2-.5.2-.8 0-2.4.5-3.8 1-4.7.5-1 1.3-1.8 2.7-2.4.3-.1.5-.3.7-.5.8-.8.8-2 0-2.8zm-5.2 4.8C15.4 14 15 15.8 15 18l-8-8c2.1 0 3.8-.3 5.4-1.1l.2-.1C14 8.1 15.1 6.9 16 5l3.9 4c-1.8.9-3 2-3.7 3.4z' })
    )
  );
};

exports.default = Icon;