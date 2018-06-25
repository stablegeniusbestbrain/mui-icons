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
        _react2.default.createElement('path', { d: 'M367.95 354.654l-26.615-26.562-9.568-9.548-4.698-4.706L187 174.04v.347L76.112 63.53l-24.19 24.042L187 222.47v28.816c0 37.79 31.12 68.714 68.91 68.714a68.6 68.6 0 0 0 24.565-4.545l32.39 32.274c-17.334 8.792-36.813 13.86-56.783 13.86-62.986 0-121.365-48.59-121.365-116.59H95.773C95.773 322 158 387.7 233 398.012V480h46v-81.987c22-3.352 43.066-11.222 61.627-22.622l95.278 95.08 24.033-24-33.847-33.786-58.215-57.96 58.224 57.96-58.15-58.03zM325 251.286V100.714C325 62.924 293.79 32 256 32s-69 30.924-69 68.714v25.244l137.11 136.968c.67-3.79.89-7.68.89-11.64zM416.44 245h-38.942c0 20.496-5.498 39.676-14.93 56.197l27.57 27.516c16.524-24.11 26.3-52.787 26.3-83.713zM460 446.427l-33.9-33.743 33.855 33.785z' })
      )
    )
  );
};

exports.default = Icon;