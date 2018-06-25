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
      _react2.default.createElement('path', { d: 'M2 5h20v15H2V5zm18 13V7H4v11h16zM17 8c0 1.1.9 2 2 2v5c-1.1 0-2 .9-2 2H7c0-1.1-.9-2-2-2v-5c1.1 0 2-.9 2-2h10zm0 5v-1c0-1.1-.7-2-1.5-2s-1.5.9-1.5 2v1c0 1.1.7 2 1.5 2s1.5-.9 1.5-2zm-1.5-2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5zM13 13v-1c0-1.1-.7-2-1.5-2s-1.5.9-1.5 2v1c0 1.1.7 2 1.5 2s1.5-.9 1.5-2zm-1.5-2c.3 0 .5.2.5.5v2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5zM8 15h1v-5H8l-1 .5v1l1-.5v4z' })
    )
  );
};

exports.default = Icon;