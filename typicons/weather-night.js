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
      _react2.default.createElement('path', { d: 'M10.5 20c-.9 0-1.7-.1-2.5-.4l-1.3-.5.8-1.1c1.3-1.6 2-3.5 2-5.5s-.7-3.9-2-5.5l-.8-1.1L8 5.5c.8-.3 1.6-.5 2.5-.5 4.1 0 7.5 3.4 7.5 7.5S14.6 20 10.5 20zm-.5-2h.5c3 0 5.5-2.5 5.5-5.5S13.5 7 10.5 7H10c1 1.7 1.5 3.5 1.5 5.5S11 16.3 10 18z' })
    )
  );
};

exports.default = Icon;