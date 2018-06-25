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
        _react2.default.createElement('path', { d: 'M352.4 128l-95.7-64-96.3 64L64 64v320l96.4 64 96.3-64 95.7 64 95.6-64V64l-95.6 64zM168 142.4l80-53.2v281.5l-80 53.1V142.4zM264 88l80 53.4V423l-80-53.5V88zM80 94l72 47.6v281.6l-72-47.8V94zm352 281.4l-72 48.3V142.4L432 94v281.4z' })
      )
    )
  );
};

exports.default = Icon;