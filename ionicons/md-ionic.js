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
        _react2.default.createElement('path', { d: 'M256 164.3c-50.6 0-91.7 41.1-91.7 91.7s41.1 91.7 91.7 91.7 91.7-41.1 91.7-91.7-41.1-91.7-91.7-91.7z' }),
        _react2.default.createElement('circle', { cx: '394', cy: '124.6', r: '43.8' }),
        _react2.default.createElement('path', { d: 'M445.3 169.8c-7.4 8.4-16.9 15-27.6 19 8.6 20.7 13.4 43.4 13.4 67.2 0 96.6-78.6 175.2-175.2 175.2S80.7 352.6 80.7 256 159.3 80.8 255.9 80.8c26.9 0 52.3 6.1 75.1 16.9 4.5-10.5 11.5-19.6 20.3-26.6C322.8 56.4 290.4 48 256 48 141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208c0-30.7-6.7-59.9-18.7-86.2z' })
      )
    )
  );
};

exports.default = Icon;