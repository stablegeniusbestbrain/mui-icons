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
        _react2.default.createElement('path', { d: 'M374.4 141.9l-13.3-.1C349.4 88.2 306 48 236 48S108.2 98.4 108.2 169.5l.3 4.8C66.3 179.9 32 219.6 32 264c0 47 37.9 88 84.7 88h96.8l8.6-32h-70.9l4.3-19.5 32-144 2.8-12.5h135.9l-6.2 20.6-17.8 59.4H370l-15.4 24.5L289.4 352H367c72 0 113-52 113-110 0-58.6-47.3-100.1-105.6-100.1z' }),
        _react2.default.createElement('path', { d: 'M341 240h-60.3l24-80H203l-32 144h72l-42.9 160z' })
      )
    )
  );
};

exports.default = Icon;