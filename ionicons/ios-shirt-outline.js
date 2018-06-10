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
        _react2.default.createElement('path', { d: 'M372.5 92.6C352 77.9 332 63.9 310 63.9s-22 8-54 8-32-8-54-8-42 14-62.5 28.7C107.9 115.3 48 179 48 179l80 93.2V448h256V272.6l80-93.7s-59.9-63.6-91.5-86.3zM213.1 80.8c9.9 0 25.4 7.3 42.9 7.3s33.1-7.3 42.9-7.3c6.9 0 11.1 3.6 11.1 16 0 23.3-24.2 44-54 44s-54-21.3-54-44c0-12.3 4.1-16 11.1-16zM384 200.1c0-4.4-3.6-8-8-8s-8 3.6-8 8V432H144V200.1c0-4.4-3.6-8-8-8s-8 3.6-8 8v49.2c-13.6-16-51.4-60.9-58.6-69.6 18-18.7 56.9-57.9 79.5-74.1 12.9-9.3 26.2-18.8 39.2-23.2-1.4 4.1-2.1 8.9-2.1 14.5 0 15.7 7.9 31.3 21.6 42.8 13.3 11.1 30.5 17.2 48.4 17.2 18 0 35.2-6 48.4-16.9 13.7-11.4 21.6-27.1 21.6-43.1 0-5.6-.7-10.4-2.1-14.5 13 4.4 26.3 13.9 39.2 23.2 22.6 16.2 61.4 55.4 79.4 74.1-7.4 9-46.1 54.9-58.6 69.6v-49.2z' })
      )
    )
  );
};

exports.default = Icon;