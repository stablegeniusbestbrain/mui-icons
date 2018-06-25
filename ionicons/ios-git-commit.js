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
        _react2.default.createElement('path', { d: 'M472 248h-88.3C379.6 181 324 128 256 128s-123.6 53-127.7 120H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h88.3c4.1 67 59.7 120 127.7 120s123.6-53 127.7-120H472c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-136.8 87.2C314 356.4 285.9 368 256 368s-58-11.6-79.2-32.8C155.7 314 144 285.9 144 256s11.7-58 32.8-79.2C198 155.7 226.1 144 256 144s58 11.7 79.2 32.8C356.3 198 368 226.1 368 256s-11.7 58-32.8 79.2z' })
      )
    )
  );
};

exports.default = Icon;