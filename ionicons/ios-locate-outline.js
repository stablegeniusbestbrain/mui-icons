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
        _react2.default.createElement('circle', { cx: '256', cy: '256', r: '64' }),
        _react2.default.createElement('path', { d: 'M472 248h-24.2C443.7 148.3 363.7 68.3 264 64.2V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v24.2C148.3 68.3 68.3 148.3 64.2 248H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h24.2c4.1 99.7 84.2 179.7 183.8 183.8V472c0 4.4 3.6 8 8 8s8-3.6 8-8v-24.2c99.7-4.1 179.7-84.2 183.8-183.8H472c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-91.6 132.4C349 411.8 308 429.8 264 431.8V392c0-4.4-3.6-8-8-8s-8 3.6-8 8v39.8c-44-2-85.1-20-116.4-51.4C100.2 349.1 82.1 308 80.2 264H120c4.4 0 8-3.6 8-8s-3.6-8-8-8H80.2c2-44 20-85.1 51.4-116.4S204 82.1 248 80.2V120c0 4.4 3.6 8 8 8s8-3.6 8-8V80.2c44 2 85.1 20 116.4 51.4S429.9 204 431.8 248H392c-4.4 0-8 3.6-8 8s3.6 8 8 8h39.8c-1.9 44-20 85.1-51.4 116.4z' })
      )
    )
  );
};

exports.default = Icon;