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
        _react2.default.createElement('path', { d: 'M64 64v384h384V64H64zm80 304c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm0-96c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm0-96c-8.836 0-16-7.164-16-16s7.164-16 16-16 16 7.164 16 16-7.164 16-16 16zm240 184H192v-16h192v16zm0-96H192v-16h192v16zm0-96H192v-16h192v16z' })
      )
    )
  );
};

exports.default = Icon;