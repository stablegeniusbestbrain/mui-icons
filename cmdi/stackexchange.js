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
      _react2.default.createElement('path', { d: 'M4 14v-3h16v3H4zm0-4V7h16v3H4zm13.5-8C18.9 2 20 3.2 20 4.6V6H4V4.6C4 3.2 5.1 2 6.5 2h11zM4 15h16v1.4c0 1.4-1.1 2.6-2.5 2.6h-1L13 22v-3H6.5C5.1 19 4 17.8 4 16.4V15z' })
    )
  );
};

exports.default = Icon;