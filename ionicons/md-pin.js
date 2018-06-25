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
        _react2.default.createElement('path', { d: 'M256 32c-88.004 0-160 70.557-160 156.8C96 306.4 256 480 256 480s160-173.6 160-291.2C416 102.558 344.004 32 256 32zm0 212.8c-31.996 0-57.144-24.644-57.144-56s25.147-56 57.144-56 57.144 24.644 57.144 56-25.148 56-57.144 56z' })
      )
    )
  );
};

exports.default = Icon;