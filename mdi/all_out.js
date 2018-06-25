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
      _react2.default.createElement('path', { d: 'M16.2 4.2l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm13-1c-2.8-2.7-7.2-2.7-9.9 0s-2.8 7.2 0 9.9 7.1 2.7 9.9 0 2.7-7.2 0-9.9zM16.1 16c-2.2 2.1-5.6 2.1-7.7 0s-2.2-5.6 0-7.7 5.5-2.1 7.7 0 2.1 5.6 0 7.7z' })
    )
  );
};

exports.default = Icon;