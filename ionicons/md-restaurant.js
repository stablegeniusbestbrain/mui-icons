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
        _react2.default.createElement('path', { d: 'M164.852 279.94l61.834-60.252L73.72 71.706c-33.626 32.764-33.626 86.677 0 119.44l91.132 88.793z' }),
        _react2.default.createElement('path', { d: 'M312.39 241.88c33.635 14.802 80.282 4.232 113.91-29.593 41.22-40.165 49.908-98.303 17.362-128.96-31.465-31.71-91.13-23.245-132.354 16.92-34.718 33.826-45.566 79.277-30.374 110.987-47.74 47.568-211.552 207.173-211.552 207.173L99.76 448l149.71-145.866L399.176 448l30.374-29.593-149.708-145.87 32.547-30.657z' })
      )
    )
  );
};

exports.default = Icon;