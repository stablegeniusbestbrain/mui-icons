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
        _react2.default.createElement('path', { d: 'M286 256l98-87L255.8 32H240v180l-89.4-77-22.6 25 112 96-112 96 22.6 25.8L240 299v181h15.8l.2-.4L384 344l-98-88zm51.8 88.5L272 415V287.2l65.8 57.3zM272 225.6V97.1l65.8 71.2-65.8 57.3z' })
      )
    )
  );
};

exports.default = Icon;