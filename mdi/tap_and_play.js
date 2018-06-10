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
      _react2.default.createElement('path', { d: 'M2 16v2c2.8 0 5 2.2 5 5h2c0-3.9-3.1-7-7-7zm0 4v3h3c0-1.7-1.3-3-3-3zm0-8v2c5 0 9 4 9 9h2c0-6.1-4.9-11-11-11zM17 1H7c-1.1 0-2 .9-2 2v7.4c.7.1 1.4.3 2 .6V5h10v13h-3c.5 1.3.8 2.6.9 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;