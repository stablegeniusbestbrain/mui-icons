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
      _react2.default.createElement('path', { d: 'M16.5 15.5v-1.7L14 16.3l2.5 2.5V17H22v-1.5zm3 4.3H14v1.5h5.5V23l2.5-2.5-2.5-2.5zM9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.8 8.9L3 23h2.1l1.7-8L9 17v6h2v-7.6l-2.1-2 .6-3C10.8 12 12.8 13 15 13v-2c-1.8 0-3.4-1-4.3-2.4L9.7 7c-.4-.7-1-1-1.7-1-.2 0-.5 0-.7.2L2 8.3V13h2V9.7l1.8-.8' })
    )
  );
};

exports.default = Icon;