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
        _react2.default.createElement('path', { d: 'M411.1 256c0-23.9 14.8-42.8 36.9-55.8-4-13.3-9.3-26.2-15.8-38.2-24.9 6.5-45-3.2-62-20.2-16.9-16.9-22.1-37.1-15.6-62-12-6.5-24.8-11.8-38.2-15.8-13 22.2-36.4 36.9-60.4 36.9-23.9 0-47.4-14.7-60.4-36.9-13.4 4-26.2 9.3-38.2 15.8 6.5 24.9 1.3 45-15.6 62-16.9 16.9-37.1 26.7-61.9 20.2-6.6 12-11.9 24.8-15.9 38.2 22.2 13 37 31.9 37 55.8s-14.8 47.4-37 60.4c4 13.4 9.3 26.2 15.8 38.2 24.9-6.5 45-1.3 61.9 15.6 17 16.9 22.1 37.1 15.6 62 12.1 6.5 24.8 11.8 38.2 15.8 13-22.2 36.5-36.9 60.4-36.9s47.4 14.7 60.4 36.9c13.4-4 26.2-9.3 38.2-15.8-6.5-24.9-1.3-45 15.6-62 16.9-16.9 37.1-26.7 62-20.2 6.5-12.1 11.8-24.9 15.8-38.2-22.1-13-36.8-31.9-36.8-55.8zM256 352c-52.9 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z' })
      )
    )
  );
};

exports.default = Icon;