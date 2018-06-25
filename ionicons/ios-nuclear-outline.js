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
        _react2.default.createElement('path', { d: 'M320 272c0-23.8-13.1-44.7-32.5-55.7l81.2-137.9C335.6 59.1 297.1 48 256 48c-41.2 0-79.9 11.2-113.1 30.6l79.6 138.9C204.2 228.8 192 249 192 272H32c0 83.3 46.9 153.4 114.4 192l78.1-136.3c9.3 5.3 20.1 8.3 31.5 8.3 11.4 0 22.1-3 31.3-8.2L365.6 464C433.1 425.4 480 355.3 480 272H320zM165 84.9C193.2 71.2 224.4 64 256 64c31.4 0 62.4 7.1 90.4 20.7l-73.9 125.5c-5.3-1.4-10.8-2.2-16.5-2.2-6.6 0-13 1-19 2.9l-72-126zm-24.3 356.8c-25.8-17.3-47.4-39.6-63.2-65.3C61 349.6 51.2 319.3 48.6 288H194c3 11.6 9.2 21.9 17.5 30l-70.8 123.7zM208 272c0-17.1 9-32.1 22.4-40.6.4-.3.8-.5 1.2-.8 7.1-4.2 15.5-6.6 24.3-6.6 26.5 0 48 21.5 48 48s-21.5 48-48 48-47.9-21.5-47.9-48zm163.2 169.7l-71.1-123.5c8.5-8.1 14.8-18.5 17.8-30.2h145.4c-2.5 31.3-12.4 61.6-28.9 88.4-15.7 25.7-37.4 48-63.2 65.3z' })
      )
    )
  );
};

exports.default = Icon;