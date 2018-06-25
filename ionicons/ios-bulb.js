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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M400 188.9C400 111 333.9 48 256 48s-144 63.1-144 140.9c0 31 13.2 59.1 30.2 83.1h-.3c10.9 15 21.4 27.7 31.5 45 22 37.8 18.6 74.3 18.7 81.5v1.5h32V271.9L192 208h16.6l31.4 63.9V400h32V271.9l31.4-63.9H320l-32 63.9V400h32v-1.5c0-8.9-3.6-43.7 18.4-81.5 10.1-17.3 20.6-30 31.5-45h-.1c17-24 30.2-52.1 30.2-83.1zM224 448h64v16h-64zm-16-32h96v16h-96z' })
      )
    )
  );
};

exports.default = Icon;