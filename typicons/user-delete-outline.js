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
      _react2.default.createElement('path', { d: 'M21 14h-6c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1zM9 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3m0-2C6.2 4 4 6.2 4 9s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 13c2 0 3.3.8 3.8 1.4-.7.3-2 .6-3.8.6-2 0-3.2-.3-3.8-.5C5.6 17.7 7 17 9 17m0-2c-3.7 0-6 2-6 4 0 1 2.3 2 6 2 3.5 0 6-1 6-2 0-2-2.4-4-6-4z' })
    )
  );
};

exports.default = Icon;