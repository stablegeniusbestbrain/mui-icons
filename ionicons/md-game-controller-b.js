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
        _react2.default.createElement('path', { d: 'M163 160h-24v31h-31v24h31v30h24v-30h30v-24h-30z' }),
        _react2.default.createElement('path', { d: 'M467.1 204.1C461.9 141 419.4 96 360 96H152C92.6 96 50.2 141 45 204.1c0 0-13 134.7-13 163.9s21.5 48 48 48c13.1 0 25-5.3 34-13.9h-.3L192 321h128l78.3 81-.3.1c9 8.6 20.9 13.9 34 13.9 26.5 0 48-20.3 48-48s-12.9-163.9-12.9-163.9zM151 262c-33.1 0-60-27.1-60-60.5s26.9-60.5 60-60.5 60 27.1 60 60.5-26.9 60.5-60 60.5zm187.1-47.4c-7.2 7.2-19 7.2-26.2 0s-7.2-19 0-26.2c7.2-7.2 19-7.2 26.2 0 7.2 7.2 7.2 19 0 26.2zm37.5 37.5c-7.2 7.2-19 7.2-26.2 0-7.2-7.2-7.2-19 0-26.2 7.2-7.2 19-7.2 26.2 0 7.2 7.2 7.2 19 0 26.2zm0-75c-7.2 7.2-19 7.2-26.2 0-7.2-7.2-7.2-19 0-26.2 7.2-7.2 19-7.2 26.2 0 7.2 7.2 7.2 19 0 26.2zm37.5 37.5c-7.2 7.2-19 7.2-26.2 0-7.2-7.2-7.2-19 0-26.2 7.2-7.2 19-7.2 26.2 0 7.2 7.2 7.2 19 0 26.2z' })
      )
    )
  );
};

exports.default = Icon;