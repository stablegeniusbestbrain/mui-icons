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
        _react2.default.createElement('path', { d: 'M376 248H155.3l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1l-80 88c-.2.2-.4.4-.5.6-.1.1-.1.2-.2.3-.1.1-.2.2-.3.4-.1.1-.1.2-.2.3-.1.1-.1.2-.2.3-.1.1-.1.2-.2.4-.1.1-.1.2-.2.3 0 .1-.1.2-.1.4 0 .1-.1.3-.1.4 0 .1-.1.2-.1.4 0 .1-.1.3-.1.4 0 .1 0 .3-.1.4v.3c-.1.5-.1 1.1 0 1.6v.3c0 .1 0 .3.1.4 0 .1.1.3.1.4 0 .1.1.2.1.4 0 .1.1.3.1.4 0 .1.1.2.1.4 0 .1.1.2.2.3.1.1.1.2.2.4.1.1.1.2.2.3.1.1.1.2.2.3.1.1.2.2.3.4.1.1.1.2.2.3.2.2.3.4.5.6l80 88c1.6 1.7 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3 3.1-3.1 3-8 0-11.3L155.3 264H376c4.4 0 8-3.6 8-8s-3.6-8-8-8z' })
      )
    )
  );
};

exports.default = Icon;