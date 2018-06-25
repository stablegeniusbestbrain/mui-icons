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
      _react2.default.createElement('path', { d: 'M3 4h2v6h4V4h2v14H9v-6H5v6H3V4zm12 0h5v2h-5v4h2c2.2 0 4 1.8 4 4s-1.8 4-4 4h-2c-1.1 0-2-.9-2-2v-1h2v1h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;