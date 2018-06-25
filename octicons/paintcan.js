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
      _react2.default.createElement('path', { d: 'M12 0C7 0 3 4 3 9v1.5c0 .8.7 1.5 1.5 1.5v7.5c0 1.6 3.4 3 7.5 3s7.5-1.4 7.5-3V12c.8 0 1.5-.7 1.5-1.5V9c0-5-4-9-9-9zm4.5 15v.8c0 .4-.3.7-.7.7s-.8-.3-.8-.7V15c0-.4-.3-.7-.7-.7s-.8.3-.8.7v3.8c0 .4-.3.7-.7.7s-.8-.3-.8-.7v-3c0-.5-.3-.8-.7-.8s-.8.3-.8.8v.7c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V15c-.8 0-1.5-.7-1.5-1.5v-2.7c1.4.7 3.5 1.2 6 1.2s4.6-.5 6-1.2v2.7c0 .8-.7 1.5-1.5 1.5zM12 10.5c-2.5 0-4.7-.6-5.6-1.5.9-.9 3.1-1.5 5.6-1.5 2.5 0 4.7.6 5.6 1.5-.9.9-3.1 1.5-5.6 1.5zM12 6C7.9 6 4.5 7.3 4.5 9c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5c0-1.7-3.4-3-7.5-3z' })
    )
  );
};

exports.default = Icon;