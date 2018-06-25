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
      _react2.default.createElement('path', { d: 'M5 5h2v2H5V5zM1 1h10v10H1V1zm2 2v6h6V3H3zm2 14h2v2H5v-2zm-4-4h10v10H1V13zm2 2v6h6v-6H3zM17 5h2v2h-2V5zm-4-4h10v10H13V1zm2 2v6h6V3h-6zm-2 10h4v2h2v-2h4v2h-4v2h4v6h-4v-2h-4v2h-2v-2h2v-2h-2v-6zm8 8v-2h-2v2h2zm-2-4h-2v-2h-2v4h4v-2z' })
    )
  );
};

exports.default = Icon;