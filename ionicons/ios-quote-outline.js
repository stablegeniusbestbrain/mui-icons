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
        _react2.default.createElement('path', { d: 'M209 112c8.8 0 15 6.2 15 15v192c0 23.3-4.3 45-13.3 64-3.5 7.5-6.8 13-9.4 17H182c12.7-19 25-45.3 25-80.5V304h-78c-8.8 0-17-8.2-17-17V127c0-8.5 7.9-15 17-15h80m0-16h-80c-17.7 0-33 13.3-33 31v160c0 17.7 15.3 33 33 33h62c0 64-46 96-46 96h64s31-33.6 31-97V127c0-17.7-13.3-31-31-31zm176 16c8.8 0 15 6.2 15 15v192c0 23.3-4.3 45-13.3 64-3.5 7.5-6.8 13-9.4 17H358c12.7-19 25-45.3 25-80.5V304h-78c-8.8 0-17-8.2-17-17V127c0-8.5 7.9-15 17-15h80m0-16h-80c-17.7 0-33 13.3-33 31v160c0 17.7 15.3 33 33 33h62c0 64-46 96-46 96h64s31-33.6 31-97V127c0-17.7-13.3-31-31-31z' })
      )
    )
  );
};

exports.default = Icon;