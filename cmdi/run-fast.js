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
      _react2.default.createElement('path', { d: 'M17.1 10L16 8.2l-.7 2.9 2.5 4.5V22H16v-5l-2.3-3.1-1.6 4.5-4.9 2.1-1-1.5 4.2-2.5 2.5-9.8-2.1.6V11H9V5.8l5.4-1.7.5-.1c.6 0 1.2.4 1.5.9l2 3.3H22V10h-4.9zM17 3.8c-1 0-1.8-.8-1.8-1.8S16 .2 17 .2s1.8.8 1.8 1.8S18 3.8 17 3.8zM7 9v2H4c-.6 0-1-.4-1-1s.4-1 1-1h3zm2.3 4l-.5 2H5c-.6 0-1-.4-1-1s.4-1 1-1h4.3zM7 5v2H3c-.6 0-1-.4-1-1s.4-1 1-1h4z' })
    )
  );
};

exports.default = Icon;