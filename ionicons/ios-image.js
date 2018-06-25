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
        _react2.default.createElement('path', { d: 'M447.8 64.2L64 64v384h384V64l-.2.2zM432 432H80V80h352v352z' }),
        _react2.default.createElement('path', { d: 'M416 96H96v256h320V96zm-111.8 63.8c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zM153.5 336l70.7-100.5L295 336H153.5zm161.1.1l-25.9-36.9 22.3-31.6 48.2 68.5h-44.6z' })
      )
    )
  );
};

exports.default = Icon;