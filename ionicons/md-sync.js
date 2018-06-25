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
        _react2.default.createElement('path', { d: 'M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.546c15.996-25.456 25-54.987 25-86.546 0-89.6-72.002-162.91-160-162.91zm0 285.094c-66 0-120-54.988-120-122.184 0-20.363 5-39.71 14-57.02l-29-29.526C105 193.89 96 224.436 96 256c0 89.6 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z' })
      )
    )
  );
};

exports.default = Icon;