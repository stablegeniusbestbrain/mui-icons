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
          _react2.default.createElement('path', { d: 'M18 23h-2v-4c0-5 4-9 9-9 4.5 0 8.4 3.4 8.9 7.9l-2 .2c-.4-3.5-3.4-6.1-6.9-6.1-3.9 0-7 3.1-7 7v4z' }),
          _react2.default.createElement('path', { d: 'M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z' }),
          _react2.default.createElement('circle', { cx: '25', cy: '28', r: '2' }),
          _react2.default.createElement('path', { d: 'M25.5 28h-1l-1 6h3z' })
        )
      )
    )
  );
};

exports.default = Icon;