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
        _react2.default.createElement('path', { d: 'M371.4 64H140.6C75.5 103 32 174.5 32 256s43.5 152 108.6 192h230.9c65-40 108.5-110.5 108.5-192S436.5 103 371.4 64zm-4.6 368H145.2c-28.7-19-52.6-43.7-69.5-72.7C57.6 328 48 292 48 255.6c0-36.5 9.6-72.3 27.7-103.7 17-29.3 40.9-54.9 69.4-71.9h221.8c30.8 20 52.4 42.5 69.3 71.8 18.2 31.5 27.7 67.3 27.7 103.8 0 36.4-9.6 72.4-27.7 103.7-16.8 29.1-40.7 53.7-69.4 72.7z' }),
        _react2.default.createElement('path', { d: 'M320 160h32v96h-32zm-160-16h32v128h-32zm96 176c-17.6 0-32 14.4-32 32v48h64v-48c0-17.6-14.4-32-32-32z' })
      )
    )
  );
};

exports.default = Icon;