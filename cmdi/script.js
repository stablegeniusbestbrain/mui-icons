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
      _react2.default.createElement('path', { d: 'M14 20c1.1 0 2-.9 2-2V5H9c-.6 0-1 .4-1 1v10H5V5c0-1.7 1.3-3 3-3h11c1.7 0 3 1.3 3 3v1h-4v13c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3v-1h10c0 1.1.9 2 2 2z' })
    )
  );
};

exports.default = Icon;