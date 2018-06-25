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
        _react2.default.createElement('path', { d: 'M368 112c-11 1.4-24.9 3.5-39.7 3.5-23.1 0-44-5.7-65.2-10.2-21.5-4.6-43.7-9.3-67.2-9.3-46.9 0-62.8 10.1-64.4 11.2l-3.4 2.4V416h16V272.7c6-2.5 21.8-6.9 51.9-6.9 21.8 0 42.2 8.3 63.9 13 22 4.7 44.8 9.6 69.5 9.6 14.7 0 27.7-2 38.7-3.3 6-.7 11.3-1.4 16-2.2V109.5c-4.7.9-10.1 1.7-16.1 2.5z' })
      )
    )
  );
};

exports.default = Icon;