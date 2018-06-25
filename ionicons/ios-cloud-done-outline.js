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
        _react2.default.createElement('path', { d: 'M309.2 216l-77 76.9L203 264l-11 11 34.6 34.3c1.5 1.5 3.6 2.8 5.5 2.8s3.9-1.2 5.4-2.7l82.5-82.2-10.8-11.2z' }),
        _react2.default.createElement('path', { d: 'M413 226.1C406.1 161.9 354 112 288 112c-44.8 0-86.5 22.8-109.4 57.7-7.9-3.7-16.8-5.7-26.1-5.7-34.2 0-62 27.5-62.5 61.6-34.9 11-58 42.6-58 78.4 0 43.9 35.6 80 79.5 80h289c43.9 0 79.5-36.1 79.5-80 0-39.6-29-71.9-67-77.9zM400.5 368h-289c-35 0-63.5-28.8-63.5-64 0-14.3 4.4-27 12.8-38.6 8.5-11.6 20.2-20.2 34-24.5l11-3.5.2-11.6c.2-12.3 5.1-23.8 13.8-32.4 8.8-8.6 20.3-13.4 32.6-13.4 6.8 0 13.3 1.4 19.4 4.2l12.5 5.8 7.6-11.5c20.8-31.8 57.9-50.7 95.8-50.7 27.8 0 52.5 10.3 73.1 28.9 20.5 18.5 33.3 43.7 36.3 71l1.3 12.2 12.1 1.9c14.7 2.3 28.3 9.9 38.1 21.4 9.9 11.6 15.4 25.6 15.4 40.8 0 35.2-28.5 64-63.5 64z' })
      )
    )
  );
};

exports.default = Icon;