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
          _react2.default.createElement('path', { d: 'M40 24h-.2c-.9-4.6-5-8-9.8-8-3.1 0-5.9 1.4-7.7 3.7-.2.3-.3.6-.3 1.2l-.4 9.1.4 5.5c0 .3.3.5.5.5H40c3.3 0 6-2.7 6-6s-2.7-6-6-6zM18.9 20c-.3 0-.5.2-.5.5l-.8 9v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-9c0-.3-.3-.5-.5-.5h-.4zM14.9 21c-.3 0-.5.2-.5.5l-.8 8v1l.8 5c0 .3.3.5.6.5h.2c.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.8-8c0-.3-.3-.5-.5-.5h-.4zM11 24c-.3 0-.5.2-.6.5l-.8 5v1l.8 5c0 .3.3.5.6.5s.5-.2.6-.5l.8-5v-1l-.8-5c-.1-.3-.3-.5-.6-.5zM7 23c-.3 0-.5.2-.6.5l-.9 6v1l.8 5c.2.3.4.5.7.5.3 0 .5-.2.6-.5l.8-5c0-.3.1-.7 0-1l-.9-6c0-.3-.2-.5-.5-.5zM3.3 26c-.3 0-.5.2-.6.5l-.6 3c-.1.3-.1.7 0 1l.6 4c.1.3.3.5.6.5s.5-.2.6-.5l.6-4v-1l-.6-3c-.1-.3-.3-.5-.6-.5z' })
        )
      )
    )
  );
};

exports.default = Icon;