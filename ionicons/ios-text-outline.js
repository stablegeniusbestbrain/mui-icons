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
        _react2.default.createElement('path', { d: 'M256 112c97 0 176 62 176 138.3 0 35.9-17.6 69.2-49.5 93.9-32.8 25.4-77.4 39.3-125.5 39.3-28.9 0-51-3-69.7-9.3-.6-.2-1.3-.5-2-.7-.3-.1-.6-.2-.8-.2-4.7-1.4-9.7-2.1-14.7-2.1-5.6 0-11.1.9-16.3 2.6l-.3.1c-.6.2-8.9 3.3-11 4.3l-39.6 17.2c13.8-43.9 13.8-44.8 13.8-47.6 0-7.1-2.2-14.1-6.3-20.2-.5-.7-1-1.4-1.6-2.1-.7-.9-1.3-1.7-1.8-2.3-17.4-21.9-26.6-47.1-26.6-73C80 174 159 112 256 112m0-16C149.9 96 64 165.1 64 250.3c0 30.7 11.2 59.3 30.4 83.3.9.9 2.9 3.8 3.6 4.9 0 0-1-1.6-1.1-1.9 2.3 3.3 3.6 7.1 3.6 11.2 0 1.4-17.9 58-17.9 58-1.3 4.4 2.1 8.9 7.6 10 .8.2 1.6.2 2.4.2 1.3 0 2.5-.2 3.7-.5l1.6-.6 50.6-22c.9-.4 9-3.5 10-3.9l.6-.2s-.1 0-.6.2c3.4-1.2 7.2-1.8 11.2-1.8 3.6 0 7.1.5 10.3 1.5.1 0 .2 0 .2.1.5.2 1 .3 1.5.5 23.1 7.9 48.4 10.3 75.1 10.3 106 0 191-64.1 191-149.3C448 165.1 362 96 256 96z' })
      )
    )
  );
};

exports.default = Icon;