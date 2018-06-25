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
        _react2.default.createElement('path', { d: 'M260.062 32C138.605 32 40.134 129.7 40.134 250.232c0 41.23 11.532 79.79 31.56 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.75 480 250.232 480 129.702 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.9 25.072-10.313.547-10.607 7.994-66.84-16.434-56.224-24.434-90.05-83.844-92.718-87.67-2.67-3.812-21.78-31.047-20.75-58.455 1.04-27.413 16.048-40.346 21.405-45.725 5.352-5.387 11.487-6.352 15.233-6.413 4.428-.072 7.296-.132 10.573-.01 3.274.123 8.192-.686 12.45 10.638 4.256 11.323 14.443 39.153 15.746 41.99 1.302 2.838 2.108 6.125.102 9.77-2.012 3.653-3.042 5.935-5.96 9.083-2.936 3.148-6.175 7.042-8.793 9.45-2.92 2.664-5.97 5.57-2.9 11.268 3.07 5.693 13.654 24.356 29.78 39.736 20.725 19.77 38.598 26.33 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.93 3.404-3.598 14.64-15.745 18.596-21.168 3.955-5.44 7.66-4.374 12.742-2.33 5.078 2.052 32.157 16.556 37.673 19.55 5.51 2.99 9.193 4.53 10.51 6.9 1.317 2.38.9 13.532-4.27 26.36z' })
      )
    )
  );
};

exports.default = Icon;