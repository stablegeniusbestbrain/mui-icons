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
      _react2.default.createElement('path', { d: 'M16 9v11c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V9c0-1.9 1.3-3.4 3-3.9V4H9V2h6v2h-2v1.1c1.7.5 3 2 3 3.9z' })
    )
  );
};

exports.default = Icon;