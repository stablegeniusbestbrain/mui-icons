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
          _react2.default.createElement('path', { d: 'M25 10c-8.3 0-15 6.7-15 15 0 6.4 4 11.8 9.5 14-.1-1.2-.2-3 .1-4.3.3-1.2 1.8-7.5 1.8-7.5s-.4-.9-.4-2.2c0-2.1 1.2-3.6 2.7-3.6 1.3 0 1.9 1 1.9 2.1 0 1.3-.8 3.2-1.2 5-.4 1.5.7 2.7 2.2 2.7 2.7 0 4.7-2.8 4.7-6.9 0-3.6-2.6-6.1-6.3-6.1-4.3 0-6.8 3.2-6.8 6.5 0 1.3.5 2.7 1.1 3.4.1.1.1.3.1.4-.1.5-.4 1.5-.4 1.7-.1.3-.2.3-.5.2-1.9-.9-3-3.6-3-5.8 0-4.7 3.4-9.1 9.9-9.1 5.2 0 9.2 3.7 9.2 8.7 0 5.2-3.3 9.3-7.8 9.3-1.5 0-2.9-.8-3.4-1.7 0 0-.8 2.9-.9 3.6-.3 1.3-1.3 2.9-1.9 3.9 1.4.5 2.9.7 4.4.7 8.3 0 15-6.7 15-15s-6.7-15-15-15z' })
        )
      )
    )
  );
};

exports.default = Icon;