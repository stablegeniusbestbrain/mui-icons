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
      _react2.default.createElement('path', { d: 'M9 3c2.2 0 4 1.8 4 4H5c0-2.2 1.8-4 4-4zm2.8 6.8L11 18h-1v1c0 1.1.9 2 2 2s2-.9 2-2v-5c0-2.2 1.8-4 4-4h2l-1 1 1 1h-2c-1.1 0-2 .9-2 2v5c0 2.2-1.8 4-4 4s-4-1.8-4-4v-1H7l-.8-8.2c-.5-.5-.9-1.1-1.1-1.8h7.8c-.2.7-.6 1.3-1.1 1.8zM9 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;