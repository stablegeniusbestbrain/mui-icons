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
      _react2.default.createElement('path', { d: 'M20 6H4V4h16v2zm0 12v2H4v-2h3.3l-1-4H5V8h14v6h-1.3l-1 4H20zM7 12h10v-2H7v2zm2.4 6h5.2l1.1-4H8.3l1.1 4z' })
    )
  );
};

exports.default = Icon;