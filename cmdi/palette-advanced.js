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
      _react2.default.createElement('path', { d: 'M22 22H10v-2h12v2zM2 22v-2h7v2H2zm16-4v-8h4v8h-4zm0-15h4v6h-4V3zM2 18V3h14v15H2zm7-3.4c1.7 0 3-1.4 3-3 0-2-3-5.4-3-5.4s-3 3.4-3 5.4c0 1.6 1.3 3 3 3z' })
    )
  );
};

exports.default = Icon;