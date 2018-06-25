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
        _react2.default.createElement('path', { d: 'M384 256c0-4.4 3.6-8 8-8h55.8C443.7 148.3 363.7 68.3 264 64.2V120c0 4.4-3.6 8-8 8s-8-3.6-8-8V64.2C148.3 68.3 68.3 148.3 64.2 248H120c4.4 0 8 3.6 8 8s-3.6 8-8 8H64.2c4.1 99.7 84.2 179.7 183.8 183.8V392c0-4.4 3.6-8 8-8s8 3.6 8 8v55.8c99.7-4.1 179.7-84.2 183.8-183.8H392c-4.4 0-8-3.6-8-8zm-128 64c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm216-72h-24.2c.1 2.7.2 5.3.2 8s-.1 5.3-.2 8H472c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-407.8 0H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h24.2c-.1-2.7-.2-5.3-.2-8s.1-5.3.2-8zM248 447.8V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-24.2c-2.7.1-5.3.2-8 .2s-5.3-.1-8-.2zm16-383.6V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v24.2c2.7-.1 5.3-.2 8-.2s5.3.1 8 .2z' })
      )
    )
  );
};

exports.default = Icon;