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
        _react2.default.createElement('path', { d: 'M177 268.4c0 46.1 35.3 83.6 79 83.6 9.1 0 17.8-1.6 25.9-4.6L177 168v100.4zm158 0V131.5c0-46.1-35.3-83.6-79-83.6-29.5 0-55.2 17.1-68.8 42.4l132.7 227c9.5-13.7 15.1-30.6 15.1-48.9z' }),
        _react2.default.createElement('path', { d: 'M264.2 383.3l-8.2.6-8.4-.6c-28.5-2.1-53.2-14.6-72.9-35.4-19.7-20.8-30.7-47.8-30.7-76.1V208h-16v63.8c0 67.2 54 122.6 121 127.5V448h-74v16h161v-16h-72v-48.7c14.8-1.1 29-4.7 42.1-10.5l-7.8-13.3c-10.9 4.3-22.5 7-34.1 7.8zM384 271.8V208h-16v63.8c0 28.4-10.2 55.5-29.3 76.3l-.5.5 7.7 13.2c23.4-23.2 38.1-55 38.1-90zM134.2 32l-13.8 8 257.4 440 13.8-8z' })
      )
    )
  );
};

exports.default = Icon;