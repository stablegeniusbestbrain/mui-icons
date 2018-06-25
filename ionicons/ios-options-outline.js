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
        _react2.default.createElement('path', { d: 'M352 104c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zm0 288c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zM160 240c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16m0-16c-17.645 0-32 14.355-32 32s14.355 32 32 32 32-14.355 32-32-14.355-32-32-32zm47.32 24H480v16H207.32c.44-2.604.68-5.273.68-8s-.24-5.396-.68-8zM112 256c0 2.727.24 5.396.68 8H32v-16h80.68a47.955 47.955 0 0 0-.68 8zm287.32 128H480v16h-80.68c.44-2.604.68-5.273.68-8s-.24-5.396-.68-8zM304 392c0 2.727.24 5.396.68 8H32v-16h272.68a47.955 47.955 0 0 0-.68 8zm95.32-280H480v16h-80.68c.44-2.604.68-5.273.68-8s-.24-5.396-.68-8zm-94.64 0c-.44 2.604-.68 5.273-.68 8s.24 5.396.68 8H32v-16h272.68z' })
      )
    )
  );
};

exports.default = Icon;