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
        _react2.default.createElement('path', { d: 'M223.9 48c25.7 134.6-96.7 131.9-95.9 267.4.7 111 105 148.6 128.1 148.6 23.2 0 113.9-24.1 126.9-148.6C393.7 214 310.6 107.4 223.9 48zm32.2 408.6s-40.7-33.3-40.7-74.3S256 308 256 308s40.3 33.3 40.3 74.3-40.2 74.3-40.2 74.3z' })
      )
    )
  );
};

exports.default = Icon;