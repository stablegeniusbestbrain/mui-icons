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
        _react2.default.createElement('path', { d: 'M403.002 217C388.998 148.003 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81C63.002 183.003 16 234 16 296c0 65.996 54 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96-92.998-99zM224 268v-76h64v76h68L256 368 156 268h68z' })
      )
    )
  );
};

exports.default = Icon;