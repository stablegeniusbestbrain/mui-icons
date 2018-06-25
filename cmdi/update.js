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
        'defs',
        null,
        _react2.default.createElement('path', { id: 'a', d: 'M0 0h24v24H0z' })
      ),
      _react2.default.createElement(
        'clipPath',
        { id: 'b' },
        _react2.default.createElement('use', { overflow: 'visible' })
      ),
      _react2.default.createElement('path', { d: 'M21 10.1h-6.8L17 7.3c-2.8-2.7-7.2-2.8-9.9-.1-2.8 2.7-2.8 7.1 0 9.8 2.7 2.7 7.1 2.7 9.9 0 1.3-1.3 2-2.9 2-4.9h2c0 2-.9 4.5-2.6 6.3-3.6 3.5-9.3 3.5-12.8 0s-3.5-9.1 0-12.6 9.2-3.5 12.7 0L21 3v7.1zM12.5 8v4.3l3.5 2-.7 1.2L11 13V8h1.5z', 'clip-path': 'url(#b)' })
    )
  );
};

exports.default = Icon;