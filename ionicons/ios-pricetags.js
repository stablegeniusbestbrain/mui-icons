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
        _react2.default.createElement('path', { d: 'M464 64v137.377L227.153 467.48 240 480l240-272V64z' }),
        _react2.default.createElement('path', { d: 'M288 32L32 320l160 160 23.47-23.904 11.35-11.375L448 192V32H288zm64 128c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32z' }),
        _react2.default.createElement('circle', { cx: '352', cy: '128', r: '16' })
      )
    )
  );
};

exports.default = Icon;