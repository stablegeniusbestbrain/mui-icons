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
        _react2.default.createElement('path', { d: 'M274.3 176c14 0 27.2 5.3 37.4 14.9 10.2 9.7 16.6 23.1 18.2 37.7l1.3 12.1 12.1 2c14.4 2.3 24.8 15 24.8 30.2 0 8.4-3.2 16.2-8.9 22.2-5.6 5.8-12.9 9-20.6 9H173.4c-7.7 0-15-3.2-20.6-9-5.7-6-8.9-13.9-8.9-22.2 0-14.3 8.9-26.8 22.1-31.1l10.9-3.5.2-11.4c.2-11.2 9-20.4 19.7-20.4 2.8 0 8.4 1.1 12.1 2.8s8.8 4 8.8 4l7.6-10.9c10.4-16.3 29.2-26.4 49-26.4m0-16c-25.6 0-49.4 13.4-62.5 33.8-4.5-2.1-9.6-3.4-14.9-3.4-19.5 0-35.4 16.1-35.7 36.1-20 6.5-33.2 25.2-33.2 46.2 0 25.7 20.3 47.2 45.4 47.2h165.1c25.1 0 45.4-21.4 45.4-47.2 0-23.2-16.6-42.4-38.3-45.9-3.8-37.5-33.6-66.8-71.3-66.8z' }),
        _react2.default.createElement('path', { d: 'M256 64c25.9 0 51.1 5.1 74.7 15.1 22.9 9.7 43.4 23.5 61 41.2 17.6 17.6 31.5 38.2 41.2 61 10 23.7 15.1 48.8 15.1 74.7s-5.1 51.1-15.1 74.7c-9.7 22.9-23.5 43.4-41.2 61-17.6 17.6-38.2 31.5-61 41.2-23.7 10-48.8 15.1-74.7 15.1-25.9 0-51.1-5.1-74.7-15.1-22.9-9.7-43.4-23.5-61-41.2-17.6-17.6-31.5-38.2-41.2-61C69.1 307.1 64 281.9 64 256s5.1-51.1 15.1-74.7c9.7-22.9 23.5-43.4 41.2-61 17.6-17.6 38.2-31.5 61-41.2C204.9 69.1 230.1 64 256 64m0-16C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z' })
      )
    )
  );
};

exports.default = Icon;