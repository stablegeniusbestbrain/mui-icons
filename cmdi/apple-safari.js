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
      _react2.default.createElement('path', { d: 'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-4.4 0-8 3.6-8 8 0 2.1.8 4 2.1 5.4l3.8-7.5 7.5-3.8C16 4.8 14.1 4 12 4zm0 16c4.4 0 8-3.6 8-8 0-2.1-.8-4-2.1-5.4l-3.8 7.5-7.5 3.8C8 19.2 9.9 20 12 20zm0-8l-.8-.8-1.5 3.1 3.1-1.5-.8-.8zm0 5.5h1V19h-1v-1.5zm3.9-1.6l.7-.7 1 1-.7.7-1-1zm1.6-3.9v-1H19v1h-1.5zM12 6.5h-1V5h1v1.5zM8.1 8.1l-.7.7-1-1 .7-.7 1 1zM6.5 12v1H5v-1h1.5z' })
    )
  );
};

exports.default = Icon;