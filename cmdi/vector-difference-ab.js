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
      _react2.default.createElement('path', { d: 'M3 1c-1.1 0-2 .9-2 2v2h2V3h2V1H3zm4 0v2h3V1H7zm5 0v2h2v2h2V3c0-1.1-.9-2-2-2h-2zM1 7v3h2V7H1zm13 0v7H7v6c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-6zm2 2h4v11H9v-4h5c1.1 0 2-.9 2-2V9zM1 12v2c0 1.1.9 2 2 2h2v-2H3v-2H1z' })
    )
  );
};

exports.default = Icon;