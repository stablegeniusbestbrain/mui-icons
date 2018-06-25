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
      _react2.default.createElement('path', { d: 'M2 16c0 2.2 1.5 3.5 3.8 3.5h12.8c1.9 0 3.4-1.3 3.4-3.2V7c0-1.2-.8-2.4-1.9-2.4h-3v7.7c0 5.8-10.1 5.8-10.1.1V4.5H4.7C3.3 4.5 2 5.4 2 6.9V16zm7.3-4.8c0 4.5 5.4 3.9 5.4.7V4.5H9.3v6.7z' })
    )
  );
};

exports.default = Icon;