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
        _react2.default.createElement('path', { d: 'M216 357c.4 0 .4-.1 0-.2-.4.1-.5.2 0 .2zm124.1-179.7L215.3 303l-47.2-47.2-17.9 17.8 65.1 65 142.3-143.2z' }),
        _react2.default.createElement('path', { d: 'M432 80v352H80V80h352m16-16H64v384h384V64z' })
      )
    )
  );
};

exports.default = Icon;