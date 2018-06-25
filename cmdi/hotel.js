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
      _react2.default.createElement('path', { d: 'M19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.2-1.8-4-4-4zM7 13c1.7 0 3-1.3 3-3S8.7 7 7 7s-3 1.3-3 3 1.3 3 3 3z' })
    )
  );
};

exports.default = Icon;