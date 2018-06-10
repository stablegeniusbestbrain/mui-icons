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
        _react2.default.createElement('path', { d: 'M383.7 118.3c0-20.8-17.2-38.3-38.1-38.3l-10.5-.7c-6-27-32-47.3-59.1-47.3s-41.1 11.6-51.7 28.9c-8.5-9.8-21.1-15.4-35.2-15.4-18.3 0-34.1 11.5-41.7 26.5H123c-25 0-43 19.6-43 45.4v4c0 28.8 16 20.9 16 39.8V268c0 13.4-11.2 19.3-11.2 35.2 0 8.8 8 16.8 16.8 16.8H112V144h272s-.3-4.9-.3-25.7zm-16.1 9.7H100.4c-3 0-4.4-3.8-4.4-6.6v-4c0-8.9 3.4-16.4 8.2-21.9 4.6-5.3 11.4-7.5 18.8-7.5h34.5l4.3-9.6c5-10.5 15.4-17.2 27.3-17.2 9 0 18.5 5.1 26.2 11.1l10.7 9.3 8-10c11.3-15 26.4-23.8 42.1-23.8 10.3 0 20 3.4 28 9.9 7.8 6.3 13.3 15.1 15.4 24.8l2.6 11.8s9.4-.4 23.5 1.6 22.1 10.4 22.1 22.4l-.1 9.7z' }),
        _react2.default.createElement('circle', { cx: '288', cy: '224', r: '20' }),
        _react2.default.createElement('circle', { cx: '256', cy: '272', r: '16' }),
        _react2.default.createElement('circle', { cx: '276', cy: '352', r: '12' }),
        _react2.default.createElement('path', { d: 'M96 464h304v16H96zm320-256h-48v-48H128v272l-16 16h272l-16-16v-64h48c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm-64 224H144V176h208v256zm64-80h-48V224h48v128z' })
      )
    )
  );
};

exports.default = Icon;