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
        _react2.default.createElement('path', { d: 'M256 463.656c22.814 0 41.475-18.656 41.475-41.656h-82.95c0 23 18.66 41.656 41.475 41.656z' }),
        _react2.default.createElement('path', { d: 'M131.083 107.172l.053.074-33.046-32.97-24.086 24.107 63.042 63.153C126.888 180.52 121 202.196 121 225.07v114.555L80 381.28V402h297.743l36.182 36.33 24.08-24.3L425.9 402h.316L131.083 107.172zM391 225.07c0-63.526-45-117.677-104-131.218V79.274c0-17.706-13.37-31.243-31-31.243-17.628 0-31 13.538-31 31.244v14.578c-15 3.438-29.048 9.5-41.75 17.663L391 319.355V225.07z' })
      )
    )
  );
};

exports.default = Icon;