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
      _react2.default.createElement('path', { d: 'M9 16c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zm-3 0c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zm9 0c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zm-3 0c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zm7-6c0-1.7-1.3-3-3-3H5c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3 1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-2 6c0 .6-.4 1-1 1H5c-.5 0-1-.4-1-1v-6c0-.6.5-1 1-1h11c.6 0 1 .4 1 1v6z' })
    )
  );
};

exports.default = Icon;