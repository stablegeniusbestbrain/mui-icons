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
        _react2.default.createElement('path', { d: 'M64 124.2C64 102 85 80 108.2 80H176V64h-66.8C75.7 64 48 90.7 48 124.2V192h16v-67.8zM448 192h16v-67.8c0-33.5-27.7-60.2-61.2-60.2H336v16h67.8c23.2 0 44.2 22 44.2 44.2V192zM64 320H48v67.8c0 33.5 27.7 60.2 61.2 60.2H176v-16h-67.8C85 432 64 410 64 387.8V320zm384 67.8c0 22.2-21 44.2-44.2 44.2H336v16h66.8c33.5 0 61.2-26.7 61.2-60.2V320h-16v67.8z' })
      )
    )
  );
};

exports.default = Icon;