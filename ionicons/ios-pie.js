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
        _react2.default.createElement('path', { d: 'M272 64v224L74.245 337.376C101.653 420.22 179.84 480 271.875 480 386.75 480 480 386.875 480 272S387 64 272 64z' }),
        _react2.default.createElement('path', { d: 'M256 32h-5.5C90.5 32 32 148.25 32 239.287c0 0 .25 56.666 18.91 88.29L256 275.574V32z' })
      )
    )
  );
};

exports.default = Icon;