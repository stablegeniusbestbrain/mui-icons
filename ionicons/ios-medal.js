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
        _react2.default.createElement('path', { d: 'M48 112v96l128 36V112zm152 216.2c0 30.9 25.1 56 56 56s56-25.1 56-56c0-23.5-14.4-43.5-34.9-51.9l-21.1 5.8-21-5.9c-20.6 8.5-35 28.6-35 52z' }),
        _react2.default.createElement('path', { d: 'M368.4 251.1l-69.6 19.2c17.7 13.1 29.2 34.2 29.2 57.9 0 39.7-32.3 72-72 72s-72-32.3-72-72c0-23.7 11.5-44.8 29.3-57.9L143.7 251c-15 21.8-23.7 48.3-23.7 76.8 0 75.1 60.9 136 136 136s136-60.9 136-136c0-28.5-8.7-54.8-23.6-76.7z' }),
        _react2.default.createElement('path', { d: 'M192 112v136l64 18 64-17.6V112zm144 0v132l128-36v-96zM48 48h416v48H48z' })
      )
    )
  );
};

exports.default = Icon;