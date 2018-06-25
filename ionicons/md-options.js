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
        _react2.default.createElement('path', { d: 'M32 384h272v32H32zm368 0h80v32h-80zm-16 63.5c0 17.95-14.327 32.5-32 32.5-17.673 0-32-14.55-32-32.5v-95c0-17.95 14.327-32.5 32-32.5 17.673 0 32 14.55 32 32.5v95zM32 240h80v32H32zm176 0h272v32H208zm-16 63.5c0 17.95-14.327 32.5-32 32.5-17.673 0-32-14.55-32-32.5v-95c0-17.95 14.327-32.5 32-32.5 17.673 0 32 14.55 32 32.5v95zM32 96h272v32H32zm368 0h80v32h-80zm-16 63.5c0 17.95-14.327 32.5-32 32.5-17.673 0-32-14.55-32-32.5v-95c0-17.95 14.327-32.5 32-32.5 17.673 0 32 14.55 32 32.5v95z' })
      )
    )
  );
};

exports.default = Icon;