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
        _react2.default.createElement('path', { d: 'M170.4 416h187c6.3 0 14.4-4.3 20.1-10.2 3.8-3.9 5.5-11.6 5.5-21.9V176H144v207c0 10.8 2.6 19.7 6.9 25.1 4.1 5.2 10.7 7.9 19.5 7.9z' }),
        _react2.default.createElement('path', { d: 'M445.2 48H128.5C74.1 48 64 75.9 64 88.2c30.3 4.2 32 4.2 32 36.2v275.5c0 35.3 28.9 64 64.2 64H368c35.4 0 63-29.2 63-64.5V89.2c2-17.5 12.5-31.6 13.6-33.3 1.2-1.9 3.4-4.4 3.4-5.5 0-1.2-.3-2.4-2.8-2.4zM399 384c0 11.7-1.9 24.6-10.1 33-8.1 8.3-20.2 15-31.5 15h-187c-28.7 0-42.4-20.7-42.4-49V160h271v224z' })
      )
    )
  );
};

exports.default = Icon;