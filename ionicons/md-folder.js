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
        _react2.default.createElement('path', { d: 'M213.338 96H74.666C51.196 96 32 115.198 32 138.667v234.666C32 396.803 51.197 416 74.666 416h362.668c23.47 0 42.666-19.198 42.666-42.667V186.667c0-23.47-19.197-42.667-42.666-42.667H256.006l-42.668-48z' })
      )
    )
  );
};

exports.default = Icon;