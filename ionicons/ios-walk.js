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
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', { d: 'M208 346.1L148.6 388c-3.2 3-4.5 7.8-4.6 11.9s1 7.5 4.1 10.7c3.1 3.3 7.7 5.3 11.9 5.3 4 0 10.9-4.2 14-7.2l61-44.3c3.2-3 5-7.2 5-11.6l8-45-40-40v78.3z' }),
          _react2.default.createElement('circle', { cx: '272', cy: '96', r: '32' }),
          _react2.default.createElement('path', { d: 'M338.9 430.2l-13.3-100.7c-.4-3-1.7-5.8-3.6-8.1l-49.9-59V155.7c0-9.7-13.2-11.7-16-11.7h-32c-2.5 0-4.9.6-7.2 1.7l-59.5 29.7C148.7 180 144 188.7 144 200v56c0 8.8 7.2 16 16 16s16-7.2 16-16v-54.1l32-16V256l86.5 86.5 12.7 92c1.1 8 8 13.4 15.8 13.4h1.8c8.7-1.1 15.3-9 14.1-17.7z' }),
          _react2.default.createElement('path', { d: 'M363.1 235.8L280 153.3v45.1l60.6 60.1c6.3 6.2 16.4 6.2 22.6-.1 3.1-3.1 4.8-6.4 4.8-10.4 0-4.1-1.7-9-4.9-12.2z' })
        )
      )
    )
  );
};

exports.default = Icon;