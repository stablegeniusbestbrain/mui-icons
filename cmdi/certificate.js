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
      _react2.default.createElement('path', { d: 'M4 3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h8v5l3-3 3 3v-5h2c1.1 0 2-.9 2-2V5c0-1.1-.9-1.9-2-2H4zm8 2l3 2 3-2v3.5l3 1.5-3 1.5V15l-3-2-3 2v-3.5L9 10l3-1.5V5zM4 5h5v2H4V5zm0 4h3v2H4V9zm0 4h5v2H4v-2z' })
    )
  );
};

exports.default = Icon;