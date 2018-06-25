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
      _react2.default.createElement('path', { d: 'M3 5h6v6H3V5zm2 2v2h2V7H5zm6 0h10v2H11V7zm0 8h10v2H11v-2zm-6 5l-3.5-3.5 1.4-1.4L5 17.2l4.6-4.6L11 14l-6 6z' })
    )
  );
};

exports.default = Icon;