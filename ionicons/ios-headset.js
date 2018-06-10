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
        _react2.default.createElement('path', { d: 'M408 260h-24v-47.8c0-70.4-57.6-128-128-128s-128 57.6-128 128V260h-24c-39.6 0-72 32.4-72 72v15.8c0 39.6 32.4 72.2 72 72.2h24c0 4 3.6 7.9 8 7.9s8-3.7 8-8.1V213h24c4.4 0 8-4 8-8.4 0-40 38.7-72.4 80-72.4s80 32.3 80 72.3c0 4.4 3.6 8.6 8 8.6h24v206.8c0 4.4 3.6 8.1 8 8.1s8-3.9 8-7.9h24c39.6 0 72-32.6 72-72.2V332c0-39.6-32.4-72-72-72z' })
      )
    )
  );
};

exports.default = Icon;