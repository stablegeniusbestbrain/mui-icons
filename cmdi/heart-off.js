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
      _react2.default.createElement('path', { d: 'M1 4.3L2.3 3 20 20.7 18.7 22l-3.5-3.6-1.8 1.6-1.4 1.3-1.5-1.3C5.4 15.4 2 12.3 2 8.5c0-.9.2-1.8.6-2.6L1 4.3zM7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 2.6-1.6 4.8-4.2 7.5L5.3 3.5C6 3.2 6.7 3 7.5 3z' })
    )
  );
};

exports.default = Icon;