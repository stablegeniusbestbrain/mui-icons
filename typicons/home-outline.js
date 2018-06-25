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
      _react2.default.createElement('path', { d: 'M22.3 10.5c-3.4-2.9-9.6-8.2-9.6-8.3l-.7-.5-.7.5c0 .1-6.2 5.4-9.6 8.3-.4.4-.7.9-.7 1.5 0 1.1.9 2 2 2h1v6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6h1c1.1 0 2-.9 2-2 0-.6-.3-1.2-.7-1.5zM14 20h-4v-5h4v5zm4-8v8h-3v-6H9v6H6v-8H3c2.8-2.3 7.3-6.2 9-7.7 1.7 1.5 6.2 5.4 9 7.7h-3z' })
    )
  );
};

exports.default = Icon;