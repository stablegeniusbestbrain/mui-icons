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
        _react2.default.createElement('path', { d: 'M160 64h16v54h-16zM16 208h55v16H16zm43.5-90.6l11-11.1 31.4 31.5-11 11.1zm179.9 30.5l-11-11.1 31.3-31.5 11.1 11.1zM72.5 320.7l-11-11.1 31.4-31.5 11 11.1zM165 138.3c-40.5 0-73.3 32.8-73.3 73.3 0 36.8 27.1 67.3 62.5 72.5 0 0-1.2-42.9 18.9-72.9s51.8-42 51.8-42c-13.4-18.7-35.2-30.9-59.9-30.9z' }),
        _react2.default.createElement('path', { d: 'M403.3 259.2h-2.4c-3.1 0-6.1 0-9 .4-11.3-50.3-56.1-88.2-109.7-88.2-14.6 0-28.6 2.8-41.4 7.9-5.1 2-10 4.4-14.7 7.1-32 18.5-54.1 52.4-56.2 91.6-.1 2.1-.2 4.1-.2 6.2 0 3.4.2 6.8.5 10.1 0 .4.1.8.1 1.1-37.9 3.4-67.6 37.1-67.6 76 0 41.1 33.3 76.7 74.3 76.7h226.4c51.2 0 92.7-43.4 92.7-94.8-.1-51.4-41.6-94.1-92.8-94.1z' })
      )
    )
  );
};

exports.default = Icon;