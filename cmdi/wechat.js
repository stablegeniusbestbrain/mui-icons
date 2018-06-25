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
      _react2.default.createElement('path', { d: 'M9.5 4C5.4 4 2 6.7 2 10c0 1.9 1.1 3.6 2.8 4.7L4 17l2.5-1.5c.9.3 1.9.5 2.9.5-.3-.6-.4-1.3-.4-2 0-3.3 3.1-6 7-6h.6c-1.1-2.3-3.8-4-7.1-4zm-3 2.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm5 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM16 9c-3.3 0-6 2.2-6 5s2.7 5 6 5c.7 0 1.3-.1 1.9-.2L20 20l-.6-1.9c1.5-.9 2.6-2.4 2.6-4.1 0-2.8-2.7-5-6-5zm-2 2.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z' })
    )
  );
};

exports.default = Icon;