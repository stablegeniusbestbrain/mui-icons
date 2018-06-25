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
      _react2.default.createElement('path', { d: 'M3 15v-2h2v2H3zm0-4V9h2v2H3zm4 4v-2h2v2H7zm0-4V9h2v2H7zm4 4v-2h2v2h-2zm0-4V9h2v2h-2zm4 4v-2h2v2h-2zm0-4V9h2v2h-2zm4 4v-2h2v2h-2zm0-4V9h2v2h-2z' })
    )
  );
};

exports.default = Icon;