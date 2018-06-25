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
        _react2.default.createElement('path', { d: 'M317 305.4l68 77.3-2 2-78.8-69.5-48.1 36.7-48.4-36.7-78.7 69.5-2-2 67.9-77.2-130.9-99V448h384V205.4z' }),
        _react2.default.createElement('path', { d: 'M192 214h-89.3L256 331.8 410.4 214H320v-3.2l128-14.9V192L256 64 64 192v4.2l128 14.6z' })
      )
    )
  );
};

exports.default = Icon;