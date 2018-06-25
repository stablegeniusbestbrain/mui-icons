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
        _react2.default.createElement('path', { d: 'M464 48s-19.8 1.4-53.1 27.2c-15.5 12-162.2 120.6-162.2 120.6L89 187.9l-41 36.5 102 51.2-8 10.1-81.6 4.1-6.7 33.6 60.6 47.2-26.7 53.6 53.7-26.5 47.3 60.6 33.6-6.7 4.1-81.6 10.1-7.9L287.6 464l36.5-40.9-7.9-159.7s108.6-146.7 120.6-162C462.7 67.8 464 48 464 48z' })
      )
    )
  );
};

exports.default = Icon;