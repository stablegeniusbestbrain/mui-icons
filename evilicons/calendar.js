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
          _react2.default.createElement('path', { d: 'M37 38H13c-1.7 0-3-1.3-3-3V13c0-1.7 1.1-3 2.5-3H14v2h-1.5c-.2 0-.5.4-.5 1v22c0 .6.4 1 1 1h24c.6 0 1-.4 1-1V13c0-.6-.3-1-.5-1H36v-2h1.5c1.4 0 2.5 1.3 2.5 3v22c0 1.7-1.3 3-3 3z' }),
          _react2.default.createElement('path', { d: 'M17 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zM33 14c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v4c0 .6-.4 1-1 1zM20 10h10v2H20zM12 16h26v2H12zM34 20h2v2h-2zM30 20h2v2h-2zM26 20h2v2h-2zM22 20h2v2h-2zM18 20h2v2h-2zM34 24h2v2h-2zM30 24h2v2h-2zM26 24h2v2h-2zM22 24h2v2h-2zM18 24h2v2h-2zM14 24h2v2h-2zM34 28h2v2h-2zM30 28h2v2h-2zM26 28h2v2h-2zM22 28h2v2h-2zM18 28h2v2h-2zM14 28h2v2h-2zM30 32h2v2h-2zM26 32h2v2h-2zM22 32h2v2h-2zM18 32h2v2h-2zM14 32h2v2h-2z' })
        )
      )
    )
  );
};

exports.default = Icon;