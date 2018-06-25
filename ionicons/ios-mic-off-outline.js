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
        _react2.default.createElement('path', { d: 'M334.9 276.5c0 .2 0 .4-.1.6 0-.2 0-.4.1-.6zm.3-4.1v.7c-.1-.3-.1-.5 0-.7zM177 268.3v.1c0 46.1 35.3 83.6 79.1 83.6 9.1 0 17.8-1.6 25.9-4.6l-.1-.1c-8.1 3-16.7 4.6-25.8 4.6-43.8-.1-79.1-37.5-79.1-83.6z' }),
        _react2.default.createElement('path', { d: 'M256.1 335.8c-34.8 0-63.1-30.3-63.1-67.5v-73L177 168v100.3c0 46.1 35.3 83.6 79.1 83.6 9.1 0 17.8-1.6 25.9-4.6l-8.3-14.1c-5.6 1.7-11.5 2.6-17.6 2.6zm78.9-67.4v-.1c0 1.4 0 2.7-.1 4.1.1-1.3.1-2.7.1-4zm.1 4.7c-.1 1.2-.1 2.3-.2 3.5.1-1.2.2-2.4.2-3.5zm-14.9 44.3c7.9-11.5 13.1-25.3 14.6-40.2-1.5 14.8-6.7 28.6-14.6 40.2z' }),
        _react2.default.createElement('path', { d: 'M255.9 48c-29.6 0-55.3 17.1-68.9 42.4l10 16.9c9.1-25.4 32-43.5 58.9-43.5 34.8 0 63.1 30.3 63.1 67.5v136.8c0 12.1-2.9 23.5-8.2 33.3l9.3 15.7c7.9-11.5 13.2-25.3 14.7-40.2 0-.2.1-.4.1-.6.1-1.1.2-2.3.3-3.5 0-.2-.1-.4-.1-.7.1-1.4 0-2.7 0-4.1V131.6C335 85.5 299.7 48 255.9 48zm8.3 335.3l-8.2.6-8.4-.6c-28.6-2.1-53.2-14.6-72.9-35.4-19.7-20.8-30.7-47.8-30.7-76.1V208h-16v63.8c0 67.2 54 122.6 121 127.4V448h-74v16h161v-16h-72v-48.7c15-1.1 29.1-4.7 42.3-10.5l-7.8-13.3c-11 4.3-22.6 6.9-34.3 7.8zM384 271.8V208h-16v63.8c0 28.4-10.1 55.5-29.2 76.2-.2.2-.2.3-.4.5l7.6 13.2c23.4-23.1 38-54.9 38-89.9zM133.8 32L120 40.1 378.2 480l13.8-8.1z' })
      )
    )
  );
};

exports.default = Icon;