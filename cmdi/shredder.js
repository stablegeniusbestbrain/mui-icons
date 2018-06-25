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
      _react2.default.createElement('path', { d: 'M6 3v4h2V5h8v2h2V3H6zM5 8c-1.7 0-3 1.3-3 3v6h3v-3h14v3h3v-6c0-1.7-1.3-3-3-3H5zm13 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM7 16v5h2v-5H7zm4 0v4h2v-4h-2zm4 0v5h2v-5h-2z' })
    )
  );
};

exports.default = Icon;