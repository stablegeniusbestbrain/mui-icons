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
      _react2.default.createElement('path', { d: 'M11.4 10.9c-.2.8-.5 1.6-1 2.4-.2.4-.4.8-.5 1.1l.1-.1c1.3-.5 2.5-.7 3.4-.9-.2-.1-.3-.2-.4-.3-.6-.5-1.2-1.3-1.6-2.2zm6.5 3.8c-.2.2-.5.3-.9.3-.8 0-2-.2-3-.7-1.7.2-3 .4-4 .8h-.2c-1.3 2.2-2.2 3.1-3 3.1-.1 0-.3 0-.4-.1l-.5-.3v-.1c-.1-.1-.1-.3-.1-.5.1-.5.7-1.4 1.9-2.1.2-.2.5-.3.9-.5.3-.5.6-1.1.9-1.8.6-1.1.9-2.1 1.1-3-.3-1.2-.6-1.9-.2-3.2.1-.4.4-.8.8-.8h.2c.3 0 .5.1.6.2.7.7.4 2.3.1 3.6l-.1.2c.4 1.1 1 2 1.6 2.5l.9.6c.4 0 .9-.1 1.3-.1 1.2 0 2 .3 2.3.7.1.2.1.4.1.6 0 .2-.1.5-.3.6zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.5 11c-.1-.1-.5-.3-1.9-.3-.1 0-.1 0-.2.1.7.3 1.4.5 1.9.5h.2s.1-.1.1-.2c0 0-.1 0-.1-.1zm-9.2 1.5c-.2.1-.3.2-.4.3-.8.7-1.2 1.3-1.3 1.7.5-.2 1.1-.8 1.7-2zm3-6.9h.1c.1-.4.1-.6.2-.9v-.1c.1-.6.1-.9-.1-1.1l-.2-.1v.1c-.2.5-.2 1.2 0 2.1z' })
    )
  );
};

exports.default = Icon;