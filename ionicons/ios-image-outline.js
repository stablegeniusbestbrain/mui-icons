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
        _react2.default.createElement('path', { d: 'M64 64v384h384V64H64zm368 368H79V80h353v352z' }),
        _react2.default.createElement('circle', { cx: '304', cy: '176', r: '16' }),
        _react2.default.createElement('path', { d: 'M96 96v256h320V96H96zm198.6 240H153.4L224 235.8 294.6 336zm-6.2-36.6l22.3-31.6 48 68.2h-44.6l-25.7-36.6zM400 336h-21.7l-67.6-96-32.1 45.5L224 208l-90.1 128H112V112h288v224z' })
      )
    )
  );
};

exports.default = Icon;