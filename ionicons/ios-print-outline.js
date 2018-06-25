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
        _react2.default.createElement('path', { d: 'M432.5 112H400V64H112v48H80.5C62.9 112 48 125.8 48 143.3v158.4c0 17.5 14.9 32.3 32.5 32.3H128v114h256V334h48.5c17.6 0 31.5-14.8 31.5-32.3V143.3c0-17.5-13.9-31.3-31.5-31.3zM128 80h256v32H128V80zm240 352H144V240h224v192zm80-130.3c0 8.7-6.7 16.3-15.5 16.3H384v-94H128v94H80.5c-8.8 0-16.5-7.6-16.5-16.3V143.3c0-8.7 7.7-15.3 16.5-15.3h352c8.8 0 15.5 6.6 15.5 15.3v158.4z' })
      )
    )
  );
};

exports.default = Icon;