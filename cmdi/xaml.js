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
      _react2.default.createElement('path', { d: 'M18.9 12l-3.4 6h-7l-3.4-6 3.4-6h7l3.4 6zm4.9 0l-4.1 7-1.7-1 3.5-6L18 6l1.7-1 4.1 7zM.2 12l4.1-7L6 6l-3.5 6L6 18l-1.7 1-4.1-7z' })
    )
  );
};

exports.default = Icon;