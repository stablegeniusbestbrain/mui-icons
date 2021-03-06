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
        _react2.default.createElement('path', { d: 'M458 210.41l-145.267-12.477L256 64l-56.743 133.934L54 210.41l110.192 95.523L131.162 448 256 372.686 380.83 448l-33.02-142.066L458 210.41zM272.53 345.285L256 335.312l-16.53 9.973-59.988 36.19 15.88-68.295 4.368-18.79-14.577-12.637-52.994-45.94 69.835-5.997 19.206-1.65 7.522-17.75 27.276-64.38 27.27 64.378 7.52 17.75 19.208 1.65 69.846 6-52.993 45.938-14.577 12.636 4.367 18.788 15.875 68.3-59.984-36.19z' })
      )
    )
  );
};

exports.default = Icon;