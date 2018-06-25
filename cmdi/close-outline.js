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
      _react2.default.createElement('path', { d: 'M3 16.7L7.8 12 3 7.3 7.3 3 12 7.8 16.7 3 21 7.3 16.2 12l4.8 4.7-4.3 4.3-4.7-4.8L7.3 21 3 16.7zm9-3.3l4.7 4.8 1.5-1.5-4.8-4.7 4.8-4.7-1.5-1.5-4.7 4.8-4.7-4.8-1.5 1.5 4.8 4.7-4.8 4.7 1.5 1.5 4.7-4.8z' })
    )
  );
};

exports.default = Icon;