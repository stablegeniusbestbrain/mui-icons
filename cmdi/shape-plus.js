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
      _react2.default.createElement('path', { d: 'M2 2h9v9H2V2zm15.5 0C20 2 22 4 22 6.5S20 11 17.5 11 13 9 13 6.5 15 2 17.5 2zm-11 12l4.5 8H2l4.5-8zM19 17h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z' })
    )
  );
};

exports.default = Icon;