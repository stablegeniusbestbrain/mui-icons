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
        _react2.default.createElement('path', { d: 'M371.4 64H140.6C75.5 103 32 174.5 32 256s43.5 152 108.6 192h230.9c65-40 108.5-110.5 108.5-192S436.5 103 371.4 64zM192 272h-32V144h32v128zm96 128h-64v-48c0-17.6 14.4-32 32-32s32 14.4 32 32v48zm64-144h-32v-96h32v96z' })
      )
    )
  );
};

exports.default = Icon;