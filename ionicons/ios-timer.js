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
        _react2.default.createElement('path', { d: 'M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zM150.5 150.5c2.6-2.3 119.9 84.9 119.9 84.9 1 .7 1.6 1.5 2.2 2.2 5 4.6 8.2 11 8.2 18.3 0 13.7-11.1 24.9-24.9 24.9-7.8 0-14.7-3.7-19.3-9.4-.4-.4-.8-.7-1.1-1.1.1.1-87.5-117.4-85-119.8zm105.6 296.7c-105.7 0-191.4-85.7-191.4-191.4 0-52.8 21.4-100.7 56-135.3l11.8 11.8c-31.6 31.6-51.2 75.3-51.2 123.5 0 96.3 78.4 174.7 174.7 174.7s174.5-78.4 174.5-174.7c0-90.3-70.5-165.1-158.5-174V160h-16V64.4c105.7 0 191.5 85.7 191.5 191.4s-85.8 191.4-191.4 191.4z' })
      )
    )
  );
};

exports.default = Icon;