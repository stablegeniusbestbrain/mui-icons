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
      _react2.default.createElement('path', { d: 'M17 19H5c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1zm.5-14H5v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h.5c1.9 0 3.5-1.6 3.5-3.5S19.4 5 17.5 5zM15 14H7V7h8v7zm2.5-4H16V7h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z' })
    )
  );
};

exports.default = Icon;