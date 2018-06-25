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
        _react2.default.createElement('path', { d: 'M368 175.2c0-19.5-1-81.7-19.3-115.6C344.2 51.4 336.2 48 317 48H195c-19.3 0-27.2 3.4-31.7 11.6-18.3 33.9-19.3 96.5-19.3 116 0 91 32 93.1 32 167.8 0 36.7-16 66.7-16 92.7 0 25.1 9 27.8 32 27.8h128c23 0 32-2.9 32-27.9 0-26-16-55.7-16-92.4 0-74.7 32-77.4 32-168.4zM177.4 67c.5-.9.7-1 2-1.5 2-.8 6.4-1.5 15.6-1.5h122c9.1 0 13.5.7 15.6 1.5 1.4.5 1.6.7 2.1 1.6 7.1 13.1 12.2 33.8 15 59.9H162.4c2.8-26.1 7.9-47 15-60z' })
      )
    )
  );
};

exports.default = Icon;