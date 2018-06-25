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
      _react2.default.createElement('path', { d: 'M10 3L8 5v2H5C3.8 7 3.1 8 3 9L2 19c-.1 1 .5 2 2 2h16c1.5 0 2.1-1 2-2L21 9c-.1-1-.9-2-2-2h-3V5l-2-2h-4zm0 2h4v2h-4V5zm1 5h2v3h3v2h-3v3h-2v-3H8v-2h3v-3z' })
    )
  );
};

exports.default = Icon;