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
        _react2.default.createElement('path', { d: 'M190.1 133.1c16.1 1.9 32.8 10.8 46.9 24.9l167.7 167.7 59.3-59.3L286.2 88.7c-54.3-54.3-143.2-54.3-197.5 0-54.3 54.3-54.3 143.2 0 197.5L266.5 464l59.3-59.3-167.7-167.6c-14.4-14.4-23.4-30.9-25.4-46.6-2.1-16 3.1-30.4 15.3-42.6 11.5-11.6 26.1-16.7 42.1-14.8zm254.1 133.4L404.7 306l-29.6-29.6 39.5-39.5 29.6 29.6zM306 404.7l-39.5 39.5-29.6-29.6 39.5-39.5 29.6 29.6z' })
      )
    )
  );
};

exports.default = Icon;