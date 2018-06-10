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
        _react2.default.createElement('path', { d: 'M347.2 464H370l-49.3-48h-22.8l16.1 16H198l16.1-16h-22.8L142 464h22.8l17.1-16h148.2zM200 72h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8z' }),
        _react2.default.createElement('path', { d: 'M344 64c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H168c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h176M168 256h178c17.6 0 32-14.4 32-32v-96c0-17.6-14.3-32-32-32H168c-17.6 0-32 14.4-32 32v96c0 17.6 14.3 32 32 32m168.5 119.5c24.3 0 44-19.7 44-44s-19.7-44-44-44-44 19.7-44 44 19.7 44 44 44m-160 0c24.3 0 44-19.7 44-44s-19.7-44-44-44-44 19.7-44 44 19.7 44 44 44M344 48H168c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h176c35.3 0 64-28.7 64-64V112c0-35.3-28.7-64-64-64zM168 240c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h178c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H168zm168.5 119.5c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zm-160 0c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z' })
      )
    )
  );
};

exports.default = Icon;