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
      _react2.default.createElement('path', { d: 'M2 5.3L3.3 4 20 20.7 18.7 22l-6.2-6.2H8.8C6.8 15.8 6 18 4 19c-2 0-3.5-3 .4-11.3L2 5.3zm7.3.9h5.4c1.3-1.2 4.1.5 4.1.5l.5.8h.2c3.5 7.5 2.8 10.7 1.2 11.4L7.6 5.8c.6-.1 1.3 0 1.7.4zM12 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;