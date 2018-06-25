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
      _react2.default.createElement('path', { d: 'M10.5 19c-1.5 2.1-4.3 2.6-6.4 1.1C2 18.7 1.6 15.8 3 13.7c.9-1.2 2.2-1.9 3.6-1.9v1.4c-.9.1-1.8.5-2.3 1.4-1 1.4-.7 3.3.7 4.3 1.3 1 3.3.6 4.3-.8.3-.5.5-1 .5-1.5v-1h5.6l.1-.1c.5-.9 1.7-1.3 2.6-.7.9.5 1.2 1.6.6 2.6-.5.9-1.7 1.2-2.6.7-.4-.3-.7-.6-.8-1.1l-4.1.1c-.1.6-.3 1.3-.7 1.9zm7.2-7.1c2.6.3 4.4 2.5 4.1 5-.3 2.5-2.7 4.3-5.2 4-1.5-.2-2.7-1-3.4-2.2l1.2-.7c.5.7 1.4 1.3 2.3 1.4 1.8.2 3.4-1 3.6-2.6.2-1.7-1.1-3.2-2.8-3.4-.5-.1-1.1 0-1.5.1l-.9.5-2.6-4.8h-.2c-1 0-1.9-.9-1.8-1.9 0-1.1.9-1.9 2-1.9 1 .1 1.8.9 1.8 2 0 .4-.2.8-.5 1.1l1.9 3.6c.7-.2 1.3-.3 2-.2zM8.2 9.1c-1-2.3.1-5 2.4-6s5 .1 6 2.5c.6 1.4.5 2.9-.2 4.1L15.2 9c.4-.9.5-1.9.1-2.8-.7-1.6-2.5-2.3-4.1-1.7C9.7 5.2 9 7 9.7 8.6c.2.7.7 1.2 1.3 1.5l.4.2-3.1 5c0 .1.1.1.1.2.5.9.1 2.1-.8 2.5-.9.5-2 .2-2.5-.8-.5-.9-.2-2 .7-2.5.4-.2.9-.3 1.3-.2l2.3-3.8c-.5-.4-.9-.9-1.2-1.6z' })
    )
  );
};

exports.default = Icon;