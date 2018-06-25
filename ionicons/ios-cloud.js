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
        _react2.default.createElement('path', { d: 'M413.012 226.113C406.146 161.895 354.042 112 288 112c-44.838 0-86.535 22.812-109.396 57.715A62.24 62.24 0 0 0 152.5 164c-34.208 0-61.98 27.487-62.477 61.577C55.093 236.613 32 268.157 32 304c0 43.906 35.594 80 79.5 80h289c43.906 0 79.5-36.094 79.5-80 0-39.648-29.027-71.884-66.988-77.887z' })
      )
    )
  );
};

exports.default = Icon;