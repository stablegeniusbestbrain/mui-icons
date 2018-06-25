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
      _react2.default.createElement('path', { d: 'M6 3h5.7c3.8 0 6.5 1.1 6.5 4.4 0 1.7-.9 3.4-2.5 3.9v.1c2 .5 3.4 1.9 3.4 4.3 0 3.6-2.9 5.3-6.9 5.3H6V3zm5.5 7.4c2.5 0 3.6-1 3.6-2.5 0-1.8-1.2-2.4-3.5-2.4H9.2v4.9h2.3zm.4 8.1c2.7 0 4.1-1 4.1-3 0-1.9-1.4-2.7-4.1-2.7H9.2v5.7h2.7z' })
    )
  );
};

exports.default = Icon;