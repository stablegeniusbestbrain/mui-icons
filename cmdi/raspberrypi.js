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
      _react2.default.createElement('path', { d: 'M20 8h2v2h-2V8zM4 5h16c1.1 0 2 .9 2 2h-3v2H5v4h3v3h11v1h3c0 1.1-.9 2-2 2h-4v1h-2v-1h-3v1H7v-1H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm15 10H9v-5h10v1h3v2h-3v2zm-6-3v2h2v-2h-2zM5 6v2h1V6H5zm2 0v2h1V6H7zm2 0v2h1V6H9zm2 0v2h1V6h-1zm2 0v2h1V6h-1zm2 0v2h1V6h-1zm5 8h2v2h-2v-2z' })
    )
  );
};

exports.default = Icon;