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
      _react2.default.createElement('path', { d: 'M4 3h16c1.1 0 2 .9 2 2v15c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 4v3h4V7H4zm6 0v3h4V7h-4zm10 3V7h-4v3h4zM4 12v3h4v-3H4zm0 8h4v-3H4v3zm6-8v3h4v-3h-4zm0 8h4v-3h-4v3zm10 0v-3h-4v3h4zm0-8h-4v3h4v-3z' })
    )
  );
};

exports.default = Icon;