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
      _react2.default.createElement('path', { d: 'M10 16.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5v6zm2 0c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5v6zm2 0c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5v6zM18.5 6H18V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v13c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3h.5c1.9 0 3.5-1.6 3.5-3.5v-5C22 7.6 20.4 6 18.5 6zM7 5h9v1h-4.4l-.2.3c-.1.5-.6.8-1.1.7l-.3-.1-.2.3c-.3.5-.8.8-1.3.8C7.7 8 7 7.3 7 6.5V5zm9 13c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V8.5c.4.3.9.5 1.5.5.8 0 1.5-.4 2-1 .7 0 1.4-.4 1.7-1H16v11zm4-3.5c0 .8-.7 1.5-1.5 1.5H17V8h1.5c.8 0 1.5.7 1.5 1.5v5z' })
    )
  );
};

exports.default = Icon;