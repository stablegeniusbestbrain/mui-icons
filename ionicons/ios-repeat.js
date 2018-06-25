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
        _react2.default.createElement('path', { d: 'M332.3 163.7l-33.6-33.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3c-3.1 3.1-3.1 8.2 0 11.3L314 168H136c-39.6 0-72 32.4-72 72v24h16v-24c0-14.9 5.8-28.9 16.5-39.5 10.6-10.6 24.7-16.5 39.5-16.5h176l-26.6 26.4c-3.1 3.1-3.1 8.2 0 11.3 3.1 3.1 8.2 3.1 11.3 0l35.6-35.4c6.3-6.2 6.3-16.3 0-22.6zm99.8 84.3v24c0 14.9-5.8 28.9-16.5 39.5-10.7 10.7-24.7 16.5-39.6 16.5H200l26.6-26.4c3.1-3.1 3.1-8.2 0-11.3-3.1-3.1-8.2-3.1-11.3 0l-35.6 35.4c-6.3 6.2-6.3 16.3 0 22.6l33.6 33.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3c3.1-3.1 3.1-8.2 0-11.3L198.1 344h178c39.6 0 72-32.4 72-72v-24h-16z' })
      )
    )
  );
};

exports.default = Icon;