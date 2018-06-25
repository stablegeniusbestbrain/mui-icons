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
        _react2.default.createElement('path', { d: 'M425.5 134.8c4.7-5.9 7.5-13.5 7.5-21.6 0-19.2-15.6-34.9-34.8-34.9-8.2 0-15.7 2.8-21.6 7.5-34-24.2-75-37.8-119.9-37.8C141.8 48 48 140.5 48 255.6S141.7 464 256.6 464 464 370.7 464 255.6c0-45-14.3-86.7-38.5-120.8zm-33.7 256.9c-17.6 17.6-38.2 31.6-61.1 41.3-23.7 10-48.2 15.2-74.2 15.2-25.9 0-51.7-5.1-75.4-15.2-22.9-9.7-43.4-23.5-61.1-41.3-17.6-17.6-31.5-38.3-41.2-61.2-10-23.7-15.1-48.9-15.1-74.9 0-25.9 5.1-51.2 15.1-74.9 9.7-22.9 23.5-43.5 41.2-61.2s38.2-31.6 61.1-41.3c23.7-10 49.4-14.1 75.4-14.1 25.9 0 50.5 4 74.2 14.1 12.7 5.4 24.7 12.1 35.9 20-2.1 4.5-3.3 9.5-3.3 14.9 0 19.2 15.6 34.9 34.8 34.9 5.3 0 10.3-1.2 14.9-3.3 7.9 11.2 14.6 23.2 20 36 10 23.7 15.1 48.9 15.1 74.9 0 25.9-5.1 51.2-15.1 74.9-9.7 22.9-23.5 43.5-41.2 61.2z' }),
        _react2.default.createElement('path', { d: 'M256.5 160.1c-53 0-96 42.8-96 95.9s42.9 96.1 96 96.1c53 0 96-43 96-96.1s-43-95.9-96-95.9z' })
      )
    )
  );
};

exports.default = Icon;