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
      _react2.default.createElement('path', { d: 'M12 23l4-4H8M19 8h-2V6h2m0 5h-2V9h2m-3-1h-2V6h2m0 5h-2V9h2m0 6H8v-2h8M7 8H5V6h2m0 5H5V9h2m1 0h2v2H8m0-5h2v2H8m3 1h2v2h-2m0-5h2v2h-2m9-5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;