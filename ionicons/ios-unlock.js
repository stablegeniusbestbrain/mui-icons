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
        _react2.default.createElement('path', { d: 'M256 304c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z' }),
        _react2.default.createElement('path', { d: 'M168 224v-72c0-48.523 39.484-88 88.016-88C304.53 64 344 103.477 344 152v8h16v-8c0-57.43-46.562-104-103.984-104C198.562 48 152 94.57 152 152v72H96v240h320V224H168zm96 126.992V384h-16v-33.008c-13.802-3.553-24-16.082-24-30.992 0-17.673 14.327-32 32-32s32 14.327 32 32c0 14.91-10.198 27.44-24 30.992z' })
      )
    )
  );
};

exports.default = Icon;