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
      _react2.default.createElement('path', { d: 'M4.8 15.8c-.1 0-.3-.1-.4-.1C2.9 15 2 13.6 2 12c0-1.9 1.3-3.4 3-3.9V8c0-3.3 2.7-6 6-6 2.9 0 5.4 2.1 5.9 5 .1.5-.3 1.1-.8 1.2-.6 0-1.1-.3-1.2-.9-.3-1.9-2-3.3-3.9-3.3-2.2 0-4 1.8-4 4 0 .3 0 .5.1.8l.2 1.3-1.4-.1c-1 0-1.9.9-1.9 2 0 .8.5 1.5 1.2 1.8.5.3.7.8.5 1.4-.1.3-.5.6-.9.6zM19 7c-.6 0-1 .4-1 1s.4 1 1 1 1 .4 1 1-.4 1-1 1H9.4c-.6 0-1 .4-1 1s.4 1 1 1H14c.6 0 1 .4 1 1s-.4 1-1 1H9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.6 0 1-.4 1-1s-.4-1-1-1-1-.4-1-1 .4-1 1-1h5c1.7 0 3-1.3 3-3 0-.4-.1-.7-.2-1H19c1.7 0 3-1.3 3-3s-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;