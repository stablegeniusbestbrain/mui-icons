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
        _react2.default.createElement('path', { d: 'M464 48s-19.8 1.4-53.1 27.2c-15.5 12-162.2 120.6-162.2 120.6L89 187.9l-41 36.5 102 51.2-8 10.1-81.6 4.1-6.7 33.6 60.6 47.2-26.7 53.6 53.7-26.5 47.3 60.6 33.6-6.7 4.1-81.6 10.1-7.9L287.6 464l36.5-40.9-7.9-159.7s108.6-146.7 120.6-162C462.7 67.8 464 48 464 48zm-39.7 43.6L300.1 258.5l7.8 158.8-16.5 18.5-40.7-80.9-8.8-17.4-31.3 24.5-3.9 76.4-11.7 2.3-49.2-63.1-22.8 11.2 11.4-22.8-63.1-49.2 2.3-11.7 76.4-3.9 24.8-31.1-17.6-8.8-80.9-40.7 18.5-16.5 158.9 7.8 167-124.1c4.5-3.5 8.7-6.5 12.6-9-2.5 3.9-5.5 8.2-9 12.8z' })
      )
    )
  );
};

exports.default = Icon;