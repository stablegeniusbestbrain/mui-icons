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
      _react2.default.createElement('path', { d: 'M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5zm4.5 1v12h5c2.3 0 4-1.2 4-3.5 0-2-1.7-3-3.2-3 1.5 0 2.7-1.2 2.7-2.7S14.3 6 12.8 6H7.5zm2.5 5V8h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H10zm0 2h2c.8 0 1.5.7 1.5 1.5S12.8 16 12 16h-2v-3z' })
    )
  );
};

exports.default = Icon;