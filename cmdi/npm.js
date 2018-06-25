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
      _react2.default.createElement('path', { d: 'M4 10v4h2v-3h1v3h1v-4H4zm5 0v5h2v-1h2v-4H9zm3 1v2h-1v-2h1zm2-1v4h2v-3h1v3h1v-3h1v3h1v-4h-6zM3 9h18v6h-9v1H8v-1H3V9z' })
    )
  );
};

exports.default = Icon;