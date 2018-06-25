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
        _react2.default.createElement('path', { d: 'M399.95 160h-287.9C76.824 160 48 188.803 48 224v138.667h79.9V448h256.2v-85.333H464V224c0-35.197-28.825-64-64.05-64zM352 416H160V288h192v128zm32.1-352H127.9v80h256.2V64z' })
      )
    )
  );
};

exports.default = Icon;