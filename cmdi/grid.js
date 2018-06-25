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
      _react2.default.createElement('path', { d: 'M10 4v4h4V4h-4zm6 0v4h4V4h-4zm0 6v4h4v-4h-4zm0 6v4h4v-4h-4zm-2 4v-4h-4v4h4zm-6 0v-4H4v4h4zm0-6v-4H4v4h4zm0-6V4H4v4h4zm2 6h4v-4h-4v4zM4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;