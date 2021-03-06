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
        _react2.default.createElement('path', { d: 'M493.4 256l-31.8 31.8c9.7-63-9.8-130.2-58.5-178.9-81.2-81.2-213-81.3-294.2 0-16.3 16.3-29.3 34.5-39 54l15.5 7.8c8.9-17.9 20.8-34.7 35.7-49.6 74.3-74.3 195.3-74.3 269.7.1 45.6 45.6 63.2 108.6 52.9 168L409.6 256l-10.8 10.8L452 320l52.7-52.7-11.3-11.3zM390.8 390.8c-74.3 74.3-195.3 74.4-269.7 0C75.6 345.2 58 281.9 68.3 222.9l33.1 33.1 11.3-11.3L60 192 7.3 244.7 18.6 256l31.8-31.8c-9.8 63.4 9.7 130.2 58.4 178.9 81.2 81.2 213 81.2 294.2 0 16.3-16.3 29.3-34.6 39-54l-15.5-7.8c-8.9 17.9-20.8 34.6-35.7 49.5z' })
      )
    )
  );
};

exports.default = Icon;