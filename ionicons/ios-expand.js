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
        _react2.default.createElement('path', { d: 'M92 80h100V64H64v128h16V92l132.9 132 11.1-11.1zm328 0H320V64h128v128h-16V92L299.1 224 288 212.9zM92 432h100v16H64V320h16v100l132.9-132 11.1 11.1zm328 0H320v16h128V320h-16v100L299.1 288 288 299.1z' })
      )
    )
  );
};

exports.default = Icon;