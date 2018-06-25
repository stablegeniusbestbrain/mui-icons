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
      _react2.default.createElement('path', { d: 'M9 14v7H2v-2h3.6C4 17.3 3 15 3 12.5 3 7.3 7.3 3 12.5 3S22 7.3 22 12.5 17.7 22 12.5 22H12v-2h.5c4.1 0 7.5-3.4 7.5-7.5S16.6 5 12.5 5 5 8.4 5 12.5c0 2 .8 3.8 2 5.1V14h2z' })
    )
  );
};

exports.default = Icon;