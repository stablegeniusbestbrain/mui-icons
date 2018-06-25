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
      _react2.default.createElement('path', { d: 'M17.6 4H14V2h7v7h-2V5.4l-3.8 3.8c.5.8.8 1.8.8 2.8 0 2.4-1.7 4.4-4 4.9V19h2v2h-2v2h-2v-2H8v-2h2v-2.1c-2.3-.5-4-2.5-4-4.9 0-2.8 2.2-5 5-5 1 0 2 .3 2.8.8L17.6 4zM11 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;