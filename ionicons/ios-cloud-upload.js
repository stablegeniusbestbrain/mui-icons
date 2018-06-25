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
        _react2.default.createElement('path', { d: 'M248 336h16v112h-16zm165.012-157.887C406.146 113.895 354.042 64 288 64c-44.838 0-86.535 22.812-109.396 57.715A62.24 62.24 0 0 0 152.5 116c-34.208 0-61.98 27.487-62.477 61.577C55.093 188.613 32 220.157 32 256c0 43.906 35.594 80 79.5 80H248V191.412l-70.788 70.635-11.663-11.604L256.104 160l90.487 90.467-11.742 11.603L264 191.412V336h136.5c43.906 0 79.5-36.094 79.5-80 0-39.648-29.027-71.884-66.988-77.887z' })
      )
    )
  );
};

exports.default = Icon;