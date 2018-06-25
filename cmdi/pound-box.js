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
      _react2.default.createElement('path', { d: 'M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5zm4 13h2l.4-2h4l-.4 2h2l.4-2h2l.3-2h-2l.7-4h2l.4-2h-2l.3-2h-2l-.3 2h-4l.3-2h-2l-.3 2h-2l-.4 2h2l-.7 4h-2l-.3 2h2L7 18zm3.4-8h4l-.7 4h-4l.7-4z' })
    )
  );
};

exports.default = Icon;