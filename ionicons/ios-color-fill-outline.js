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
        _react2.default.createElement('path', { d: 'M411.4 300.3l-183.8-182L171.4 62c-9.3-9.3-21.6-14-33.9-14-12.3 0-24.6 4.7-33.9 14-18.7 18.7-18.7 49.2 0 67.9l49.3 49.3L48 283.4 219.3 448s135.1-130.7 146.1-141.7c5.8-5.8 18.2-7.1 28.6-7.1 9.5 0 17.4 1.1 17.4 1.1zM114.8 118.6c-6-6-9.3-14-9.3-22.6 0-8.6 3.3-16.6 9.3-22.6 6-6 14-9.3 22.6-9.3 8.6 0 16.6 3.3 22.6 9.3l49.5 49.5-45.4 45.1-49.3-49.4zM354 295c-8.9 8.9-102.3 99.3-134.8 130.8L70.9 283.2l149.9-149.1 152.6 151.1c-8.3 1.9-14.7 5.2-19.4 9.8zm62 41s-48 53.3-48 79.9c0 26.6 21.5 48.1 48 48.1s48-21.6 48-48.1c0-26.6-48-79.9-48-79.9zm22.6 102.6c-6 6.1-14.1 9.4-22.6 9.4-17.6 0-32-14.4-32-32.1 0-1.9 1-12.8 20.8-40.3 3.9-5.4 7.7-10.4 11.2-14.7 3.4 4.2 7.2 9.2 11 14.5 20 27.7 21 38.6 21 40.5 0 8.6-3.3 16.6-9.4 22.7z' })
      )
    )
  );
};

exports.default = Icon;