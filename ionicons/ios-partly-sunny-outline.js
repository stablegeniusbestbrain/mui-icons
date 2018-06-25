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
        _react2.default.createElement('path', { d: 'M160 64h16v54h-16zM16 208h55v16H16zm43.5-90.6l11-11.1 31.4 31.5-11 11.1zm179.9 30.5l-11-11.1 31.3-31.5 11.1 11.1zM72.5 320.7l-11-11.1 31.4-31.5 11 11.1zm81.4-52.8c-26.3-5.2-46.2-28.4-46.2-56.2 0-31.6 25.7-57.3 57.3-57.3 18.3 0 34.6 8.6 45.1 22 4.7-2.7 9.6-5.1 14.7-7.1-13.3-18.7-35.1-30.9-59.8-30.9-40.5 0-73.3 32.8-73.3 73.3 0 36.8 27.1 67.3 62.5 72.5-.3-3.3-.5-6.7-.5-10.1 0-2.1 0-4.1.2-6.2z' }),
        _react2.default.createElement('path', { d: 'M403.3 259.2h-2.4c-3.1 0-6.1 0-9 .4-11.3-50.3-56.1-88.2-109.7-88.2-14.6 0-28.6 2.8-41.4 7.9-5.1 2-10 4.4-14.7 7.1-32 18.5-54.1 52.4-56.2 91.6-.1 2.1-.2 4.1-.2 6.2 0 3.4.2 6.8.5 10.1 0 .4.1.8.1 1.1-37.9 3.4-67.6 37.1-67.6 76 0 41.1 33.3 76.7 74.3 76.7h226.4c51.2 0 92.7-43.4 92.7-94.8-.1-51.4-41.6-94.1-92.8-94.1zm54.1 149.5c-14.6 15-33.8 23.3-54.1 23.3H176.9c-31.6 0-58.3-27.9-58.3-60.7 0-14.9 5.5-29.4 15.6-40.7 9.9-11.2 23.3-18.1 37.5-19.3l16.1-1.4-1.5-15.1-.1-1c-.3-3.2-.5-6.5-.5-9.7 0-1.8.1-3.6.1-5.3 1.8-33.6 20.8-62.7 48.3-78.6 4.6-2.7 9.5-5 14.5-6.8 10.4-3.9 21.7-6 33.5-6 22.3 0 43.2 7.5 60.6 21.6 16.9 13.8 28.7 33 33.5 54.1l3.2 14.2 14.4-1.8c2.1-.3 4.7-.3 7.1-.3h2.5c20.4 0 39.6 8.2 54.2 22.9 14.6 14.8 22.6 34.4 22.6 55-.2 20.8-8.2 40.6-22.8 55.6z' })
      )
    )
  );
};

exports.default = Icon;