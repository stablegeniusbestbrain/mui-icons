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
      _react2.default.createElement('path', { d: 'M4 2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h1v9h6v2.6l-4.2 4.2 1.4 1.4 2.8-2.8V22h2v-2.6l2.8 2.8 1.4-1.4-4.2-4.2V14h6V5h1c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H4z' })
    )
  );
};

exports.default = Icon;