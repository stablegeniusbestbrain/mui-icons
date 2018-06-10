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
        _react2.default.createElement('path', { d: 'M320 113V93.3c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1 64 192 77.1 192 93.3V113h-80v15h21.1l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H400v-15h-80zM207 93.3c0-8.1 6.2-14.3 14.3-14.3h69.5c8.1 0 14.3 6.2 14.3 14.3V113h-98V93.3h-.1zM202.7 401L192 160h14.5l10.9 241h-14.7zm60.3 0h-14V160h14v241zm46.3 0h-14.6l10.8-241H320l-10.7 241z' })
      )
    )
  );
};

exports.default = Icon;