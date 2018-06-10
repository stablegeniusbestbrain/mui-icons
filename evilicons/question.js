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
        { style: { transform: 'translate(-3px,-3px)' } },
        _react2.default.createElement(
          'g',
          { style: { transform: 'scale(0.6)' } },
          _react2.default.createElement('path', { d: 'M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z' }),
          _react2.default.createElement('path', { d: 'M19.8 19.6c.3-.8.6-1.4 1.2-1.9.5-.5 1.1-.9 1.9-1.2s1.6-.4 2.5-.4c.7 0 1.4.1 2 .3.6.2 1.2.5 1.7.9s.9.9 1.1 1.5c.3.6.4 1.3.4 2 0 1-.2 1.8-.6 2.5s-1 1.3-1.6 2l-1.3 1.3c-.3.3-.6.6-.7.9-.2.3-.3.7-.3 1.1-.1.4-.1.7-.1 1.5h-1.6c0-.8 0-1.1.1-1.7.1-.5.3-1 .5-1.5.2-.4.5-.8.9-1.2.4-.4.9-.8 1.4-1.4.5-.5.9-1 1.2-1.5s.5-1.2.5-1.8c0-.5-.1-1-.3-1.4-.2-.4-.5-.8-.8-1.1-.3-.3-.7-.5-1.2-.7-.5-.2-.9-.3-1.4-.3-.7 0-1.3.1-1.8.4-.5.2-1 .6-1.3 1-.3.4-.6.9-.8 1.5s-.4.9-.4 1.6h-1.6c0-.9.1-1.6.4-2.4zM26 32v2h-2v-2h2z' })
        )
      )
    )
  );
};

exports.default = Icon;