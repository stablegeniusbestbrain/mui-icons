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
      _react2.default.createElement('path', { d: 'M22 15c0 2.2-1.8 4-3.9 4H5.9C3.8 19 2 17.2 2 15c0-1.9 1.4-3.6 3.3-3.9v-.4c0-1.4 1.1-2.5 2.5-2.5.6 0 1.1.2 1.6.6.7-1.8 1.7-3.4 4.5-3.4 3.4 0 5 2.7 5 5.4v.4c1.8.3 3.1 1.9 3.1 3.8z' })
    )
  );
};

exports.default = Icon;