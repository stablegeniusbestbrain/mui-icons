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
        _react2.default.createElement('path', { d: 'M448 384V141.8l-131.1 99.8L385 319l-2 2-78.9-69.6L256 288l-48.1-36.6L129 321l-2-2 68-77.4L64 142v242z' }),
        _react2.default.createElement('path', { d: 'M439.7 128H72l184 139.9z' })
      )
    )
  );
};

exports.default = Icon;