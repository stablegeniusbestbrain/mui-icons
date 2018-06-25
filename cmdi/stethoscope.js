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
      _react2.default.createElement('path', { d: 'M19 8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM2 2v9c0 3 2.2 5.5 5.1 5.9.7 3 3.3 5.1 6.4 5.1 3.6 0 6.5-2.9 6.5-6.5v-3.7c1.2-.4 2-1.5 2-2.8 0-1.7-1.4-3-3-3s-3 1.3-3 3c0 1.3.8 2.4 2 2.8v3.6c0 2.5-2 4.5-4.5 4.5-2 0-3.7-1.2-4.3-3C12 16.3 14 13.8 14 11V2h-4v3h2v6c0 2.2-1.8 4-4 4s-4-1.8-4-4V5h2V2H2z' })
    )
  );
};

exports.default = Icon;