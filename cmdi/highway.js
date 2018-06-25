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
      _react2.default.createElement('path', { d: 'M10 2L8 8h3V2h-1zm3 0v6h3l-2-6h-1zM2 9v1h2v1h2v-1h12l.1 1H20v-1h2V9H2zm5 2L3.3 22H11V11H7zm6 0v11h7.7L17 11h-4z' })
    )
  );
};

exports.default = Icon;