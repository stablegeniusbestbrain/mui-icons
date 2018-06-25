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
      _react2.default.createElement('path', { d: 'M13 17c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0-4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0-4c.6 0 1-.4 1-1s-.4-1-1-1-1 .5-1 1 .4 1 1 1zm4 3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5zm0-4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5zM3 3v2h18V3m-4 13.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5zM9 17c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-4-3.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm0-4c.8 0 1.5-.7 1.5-1.5S5.8 6.5 5 6.5 3.5 7.2 3.5 8 4.2 9.5 5 9.5zM3 21h18v-2H3M9 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .5-1 1 .4 1 1 1zm0 4c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm-4 4.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z' })
    )
  );
};

exports.default = Icon;