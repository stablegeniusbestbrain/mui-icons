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
        _react2.default.createElement('path', { d: 'M112 320V144h272s-.3-4.9-.3-25.7S366.5 80 345.6 80l-10.5-.7c-6-27-32-47.3-59.1-47.3s-41.1 11.6-51.7 28.9c-8.5-9.8-21.1-15.4-35.2-15.4-18.3 0-34.1 11.5-41.7 26.5H123c-25 0-43 19.6-43 45.4v4c0 28.8 16 20.9 16 39.8V268c0 13.4-11.2 19.3-11.2 35.2 0 8.8 8 16.8 16.8 16.8H112z' }),
        _react2.default.createElement('path', { d: 'M416 208h-48v-48H128v272l-32 32v16h304v-16l-32-32v-64h48c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16zm-128-4c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20zm0 148c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12 12 5.4 12 12zm-32-96c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm160 96h-48V224h48v128z' })
      )
    )
  );
};

exports.default = Icon;