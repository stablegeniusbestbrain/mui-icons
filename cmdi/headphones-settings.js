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
      _react2.default.createElement('path', { d: 'M12 1c5 0 9 4 9 9v7c0 1.7-1.3 3-3 3h-3v-8h4v-2c0-3.9-3.1-7-7-7s-7 3.1-7 7v2h4v8H6c-1.7 0-3-1.3-3-3v-7c0-5 4-9 9-9zm3 23v-2h2v2h-2zm-4 0v-2h2v2h-2zm-4 0v-2h2v2H7z' })
    )
  );
};

exports.default = Icon;