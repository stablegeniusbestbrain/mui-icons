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
      _react2.default.createElement('path', { d: 'M4 18v2h4v-2H4zm0-4v2h10v-2H4zm6 4v2h4v-2h-4zm6-4v2h4v-2h-4zm0 4v2h4v-2h-4zM2 22V8l5 4V8l5 4V8l5 4 1-10h3l1 10v10H2z' })
    )
  );
};

exports.default = Icon;