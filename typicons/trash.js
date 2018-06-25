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
      _react2.default.createElement('path', { d: 'M18 7h-1V6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1H5c-.6 0-1 .4-1 1s.4 1 1 1v8c0 2.2 1.8 4 4 4h5c2.2 0 4-1.8 4-4V9c.6 0 1-.4 1-1s-.4-1-1-1zM8 6h7v1H8V6zm8 11c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V9h9v8zm-7.5-6.5c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5s.5-.2.5-.5v-6c0-.3-.2-.5-.5-.5zm2 0c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5s.5-.2.5-.5v-6c0-.3-.2-.5-.5-.5zm2 0c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5s.5-.2.5-.5v-6c0-.3-.2-.5-.5-.5zm2 0c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5s.5-.2.5-.5v-6c0-.3-.2-.5-.5-.5z' })
    )
  );
};

exports.default = Icon;