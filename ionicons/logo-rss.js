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
        _react2.default.createElement('path', { d: 'M119.9 336.1c-30.8 0-55.9 25.1-55.9 55.8 0 30.8 25.1 55.6 55.9 55.6 30.9 0 55.9-24.9 55.9-55.6 0-30.7-25-55.8-55.9-55.8z' }),
        _react2.default.createElement('path', { d: 'M64 192v79.9c48 0 94.1 14.2 128 48.1 33.9 33.9 48 79.9 48 128h80c0-139.9-116-256-256-256z' }),
        _react2.default.createElement('path', { d: 'M64 64v79.9c171 0 303.9 133 303.9 304.1H448C448 236.3 276 64 64 64z' })
      )
    )
  );
};

exports.default = Icon;