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
          _react2.default.createElement('path', { d: 'M24 30.2c0 .2.1.5.1.8 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-2.8 0-5.1-2.3-5.1-5.1 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5.3 0 .5 0 .8.1l1.5-1.5c-.7-.3-1.5-.4-2.3-.4-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 3.8 3.1 6.9 6.9 6.9 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-.8-.1-1.6-.4-2.3L24 30.2zM33 10.1c-1.9 0-3.6.7-4.9 2l-2 2c-1.3 1.3-2 3-2 4.9 0 .8.1 1.6.4 2.3l1.5-1.5c0-.2-.1-.5-.1-.8 0-1.4.5-2.6 1.5-3.6l2-2c1-1 2.2-1.5 3.6-1.5 2.8 0 5.1 2.3 5.1 5.1 0 1.4-.5 2.6-1.5 3.6l-2 2c-1 1-2.2 1.5-3.6 1.5-.3 0-.5 0-.8-.1l-1.5 1.5c.7.3 1.5.4 2.3.4 1.9 0 3.6-.7 4.9-2l2-2c1.3-1.3 2-3 2-4.9 0-3.8-3.1-6.9-6.9-6.9z' }),
          _react2.default.createElement('path', { d: 'M20 31c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l10-10c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3z' })
        )
      )
    )
  );
};

exports.default = Icon;