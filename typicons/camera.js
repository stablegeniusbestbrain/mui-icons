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
      _react2.default.createElement('path', { d: 'M19 6h-1.6l-1-1c-.6-.6-1.6-1-2.4-1h-4c-.8 0-1.8.4-2.4 1l-1 1H5C3.3 6 2 7.3 2 9v8c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm-7 10c-1.9 0-3.5-1.6-3.5-3.5S10.1 9 12 9s3.5 1.6 3.5 3.5S13.9 16 12 16zm6-4.7c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3 1.3.6 1.3 1.3-.6 1.3-1.3 1.3z' })
    )
  );
};

exports.default = Icon;