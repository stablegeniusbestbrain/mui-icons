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
      _react2.default.createElement('path', { d: 'M16 8.6V7c0-1.1-.9-2-2-2H4v10c0 1.1.9 2 2 2h1.1c.9 2.9 3.6 5 6.8 5 3.8 0 7-3 7-6.9 0-3.1-2-5.7-4.9-6.5zm-8 1.8v3.3c0 .5-.4 1-1 1s-1-.5-1-1V7h6.7c.5 0 1 .4 1 1s-.5 1-1 1H9.4l4.8 4.8c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3L8 10.4zm6 9.6c-2.8 0-5-2.2-5-5 0-.7 0-1.4.2-2l2.9 2.9c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-2.5-2.6c.5-.2 1-.4 1.6-.4 2.8 0 5 2.2 5 5 0 2.7-2.2 4.9-5 4.9z' })
    )
  );
};

exports.default = Icon;