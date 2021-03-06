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
        _react2.default.createElement('path', { d: 'M465.4 247c-2.2-22-12.4-43-28.9-58.4-17.1-15.9-39.3-24.7-62.7-24.7-41.5 0-77.3 27.4-88.5 67-7-7-18.5-11.7-29.3-11.7s-22.3 4.7-29.3 11.7c-11.2-39.6-47-67-88.5-67-23.3 0-45.6 8.7-62.7 24.6C59 204 48.8 225 46.6 247H32v18h14.6c2.2 22 12.4 43 28.9 58.4 17.1 15.9 39.3 24.7 62.7 24.7 50.8 0 92.1-41.2 92.1-92v-.1c0-9.9 11.5-21.6 25.7-21.6s25.7 11.7 25.7 21.6v.1c0 50.8 41.3 92 92.1 92 23.3 0 45.6-8.7 62.7-24.7 16.5-15.4 26.7-36.5 28.9-58.5H480v-18h-14.6z' })
      )
    )
  );
};

exports.default = Icon;