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
      _react2.default.createElement('path', { d: 'M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1zm1.5 2c-.3 0-.5.2-.5.5v12c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-12c0-.3-.2-.5-.5-.5h-5zm8 0c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5h5c.3 0 .5-.2.5-.5v-6c0-.3-.2-.5-.5-.5h-5z' })
    )
  );
};

exports.default = Icon;