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
        _react2.default.createElement('path', { d: 'M192 152h192v16H192zm0 96h192v16H192zm0 96h192v16H192z' }),
        _react2.default.createElement('circle', { cx: '144', cy: '160', r: '16' }),
        _react2.default.createElement('circle', { cx: '144', cy: '256', r: '16' }),
        _react2.default.createElement('circle', { cx: '144', cy: '352', r: '16' })
      )
    )
  );
};

exports.default = Icon;