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
      _react2.default.createElement('path', { d: 'M17 12V3c0-.5-.4-1-1-1H3c-.5 0-1 .5-1 1v14l4-4h10c.6 0 1-.4 1-1zm4-6h-2v9H6v2c0 .6.5 1 1 1h11l4 4V7c0-.5-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;