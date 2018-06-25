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
      _react2.default.createElement('path', { d: 'M20 5h-9.1L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.2 14.6c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1 0 2 .4 2.7 1.1h.1L8.8 8.7h-.1c-.3-.3-.8-.6-1.5-.6-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4c1.3 0 1.9-.8 2.1-1.4H7.1V9.9H11v.1c.1.2.1.4.1.6 0 2.3-1.6 4-3.9 4zm6-1.7c.3.6.7 1.2 1.2 1.7l-.6.5-.6-2.2zm.8-.8h-1l-.3-1h4s-.4 1.3-1.6 2.7c-.5-.6-.9-1.2-1.1-1.7zm7 7.9c0 .6-.4 1-1 1h-7l2-2-.8-2.8.9-.9 2.7 2.7.7-.7-2.7-2.7c.9-1 1.6-2.3 1.9-3.5H19V10h-3.6V9h-1.1v1h-1.9l-1.2-4H20c.6 0 1 .5 1 1v13z' })
    )
  );
};

exports.default = Icon;