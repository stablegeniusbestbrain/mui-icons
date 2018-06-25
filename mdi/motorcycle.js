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
      _react2.default.createElement('path', { d: 'M19.4 9l-4-4H11v2h3.6l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.5 0 4.4-1.7 4.9-4h1.7l2.7-2.8c-.2.6-.3 1.2-.3 1.8 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.7-2-4.8-4.6-5zM7.8 15c-.4 1.1-1.5 2-2.8 2-1.6 0-3-1.4-3-3s1.4-3 3-3c1.3 0 2.4.8 2.8 2H5v2h2.8zM19 17c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z' })
    )
  );
};

exports.default = Icon;