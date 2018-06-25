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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M144 160h224V96H144v64zm16-48h192v32H160v-32z' }),
        _react2.default.createElement('path', { d: 'M368 64H144c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm16 352c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16v320z' }),
        _react2.default.createElement('path', { d: 'M160 240v-48h-16v64h64v-16h-16zm0 80v-48h-16v64h64v-16h-16zm0 80v-48h-16v64h64v-16h-16zm80-160v-48h-16v64h64v-16h-16zm80 0v-48h-16v64h64v-16h-16zm-80 80v-48h-16v64h64v-16h-16zm0 80v-48h-16v64h64v-16h-16zm80 0V272h-16v144h64v-16h-16z' })
      )
    )
  );
};

exports.default = Icon;