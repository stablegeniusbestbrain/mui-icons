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
        _react2.default.createElement('path', { d: 'M403.208 117.333c-4.27-12.802-16-21.333-29.875-21.333H138.667c-13.875 0-25.604 8.53-29.875 21.333L64 234.667v160C64 406.397 73.604 416 85.333 416h21.334c11.73 0 21.333-9.604 21.333-21.333V384h256v10.667c0 11.73 9.604 21.333 21.333 21.333h21.334c11.73 0 21.333-9.604 21.333-21.333v-160l-44.792-117.334zM138.668 320c-18.126 0-32-13.865-32-32s13.874-32 32-32 32 13.866 32 32-13.876 32-32 32zm234.665 0c-18.125 0-32-13.865-32-32s13.875-32 32-32 32 13.866 32 32-13.875 32-32 32zM106.667 213.333l32-85.333h234.666l32 85.333H106.667z' })
      )
    )
  );
};

exports.default = Icon;