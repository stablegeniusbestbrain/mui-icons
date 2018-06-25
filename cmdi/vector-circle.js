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
      _react2.default.createElement('path', { d: 'M9 2v2.1C6.7 4.9 4.9 6.7 4.1 9H2v6h2.1c.8 2.3 2.6 4.1 4.9 4.9V22h6v-2.1c2.3-.8 4.1-2.6 4.9-4.9H22V9h-2.1c-.8-2.3-2.6-4.1-4.9-4.9V2m-4 2h2v2h-2m-2 .2V8h6V6.3c1.2.6 2.1 1.5 2.8 2.7H16v6h1.8c-.7 1.2-1.6 2.1-2.8 2.8V16H9v1.8c-1.2-.7-2.1-1.6-2.7-2.8H8V9H6.3C6.9 7.8 7.8 6.9 9 6.3zM4 11h2v2H4m14-2h2v2h-2m-7 5h2v2h-2' })
    )
  );
};

exports.default = Icon;