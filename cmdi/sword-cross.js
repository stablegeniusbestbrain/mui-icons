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
      _react2.default.createElement('path', { d: 'M6.2 2.4l11.9 11.9 2.1-2.1 1.4 1.4-2.4 2.5 3.1 3.2c.4.4.4 1 0 1.4l-.7.7c-.4.4-1 .4-1.4 0L17 18.2l-2.4 2.5-1.4-1.4 2.1-2.1L3.4 5.3V2.4h2.8zm9.7 7.6l4.7-4.7V2.4h-2.8l-4.7 4.8 2.8 2.8zm-5 5l-2.8-2.9-2.2 2.2-2.1-2.1-1.4 1.4 2.4 2.5-3.1 3.2c-.4.4-.4 1 0 1.4l.7.7c.4.4 1 .4 1.4 0L7 18.2l2.4 2.5 1.4-1.4-2.1-2.1 2.2-2.2z' })
    )
  );
};

exports.default = Icon;