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
        _react2.default.createElement('path', { d: 'M360 256h16v48h-16zm-232 32v-16h117l-16-16H112v48h165l-16-16zm172-16h36v13h-23l19 19h20v-48h-68zm84-16h16v48h-16z' }),
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 400c-25.9 0-51.1-5.1-74.7-15.1-22.9-9.7-43.4-23.5-61-41.2-17.6-17.6-31.5-38.2-41.2-61C69.1 307.1 64 281.9 64 256s5.1-51.1 15.1-74.7c8.6-20.4 20.6-39 35.6-55.3L386 397.3c-16.3 15-34.8 27-55.3 35.6-23.6 10-48.8 15.1-74.7 15.1zm141.3-62L126 114.7c16.3-15 34.8-27 55.3-35.6C204.9 69.1 230.1 64 256 64s51.1 5.1 74.7 15.1c22.9 9.7 43.4 23.5 61 41.2 17.6 17.6 31.5 38.2 41.2 61 10 23.7 15.1 48.8 15.1 74.7s-5.1 51.1-15.1 74.7c-8.6 20.4-20.6 39-35.6 55.3z' }),
        _react2.default.createElement('path', { d: 'M360.2 212.7c-8.8-4.1-22.1-4.7-45.7-4.7h-3.6c-12.7.1-15.9-1.1-20-7.1-2.8-4.2-1-14.8 3.7-21.9 1.6-2.4 1.8-5.6.4-8.2-1.4-2.6-4.1-4.2-7-4.3-.1 0-9.4-.1-18.3-3.9-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 16.9-27.5 17.9-27.5 4.4 0 8-3.6 8-8s-3.6-8-8-8c-12 0-33.9 10.8-33.9 43.5 0 17.5 9 31 25.7 38 4.2 1.7 8.4 2.9 12 3.6-3.3 9.8-3.6 21.9 1.7 29.7 9 13.3 20.3 13.1 33.3 13.1h3.5c26.3 0 34.7 1.2 39 3.2 5.7 2.6 6.7 7.5 6.7 15.7v1.1h16v-1.1c0-7 .2-22.7-15.8-30.1z' }),
        _react2.default.createElement('path', { d: 'M400 244c0-26-3-39.2-9.1-49.5C382.3 180 368.5 176 352 176h-17.4c2.9-8.3 5.4-23.8 3.5-34.9-3.2-18.8-15.4-29.1-34.1-29.1-4.4 0-8 3.6-8 8s3.6 8 8 8c16 0 17.1 8.2 18.4 15.8 2.5 14.5-6.8 36.1-6.9 36.3-1.4 2.5-1.3 5.5.1 7.9 1.4 2.4 4.1 4 6.9 4H352c10.9 0 19.4.9 25.1 10.6 3.1 5.3 6.9 13.4 6.9 41.4h16zm0 0c0-.1 0 0 0 0z' })
      )
    )
  );
};

exports.default = Icon;