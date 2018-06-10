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
        _react2.default.createElement('path', { d: 'M438.4 192.4c12.2-14.2 19.6-32.3 19.6-52.2.1-43.8-35.5-79.6-80.4-82.1-1.6-.1-3.1-.1-4.8-.1-20.4-.1-39.1 6.8-53.8 18.1l53.8 52.4-10.6 10.4c-25.7-19.4-57.2-32-91.2-34.9v-.1c0-8.5-7-15.5-15.5-15.5s-15.5 7-15.5 15.5v.1c-34 2.9-65 15.5-90.6 34.9L139 128.6l53.8-52.4c-14.7-11.4-33.4-18.2-53.7-18.1-1.6 0-3.2.1-4.8.1-45 2.5-80.6 38.3-80.4 82.1 0 19.8 7.4 38 19.6 52.2l54-52.6 9.5 9.5c-35.1 31.9-57.1 78-57.1 129.2 0 43.9 16.2 84 43 114.7l-36.4 44.6L99 448l35.2-42.9c31.6 30.2 74.4 48.9 121.6 48.9h.4c47.2 0 90.2-18.7 121.8-48.9l35.2 43 12.3-10.1-36.5-44.7c26.8-30.8 43-70.9 43-114.7 0-51.1-22-97.3-57.2-129.3l9.5-9.5 54.1 52.6zM272 304H160v-16h96V160h16v144z' })
      )
    )
  );
};

exports.default = Icon;