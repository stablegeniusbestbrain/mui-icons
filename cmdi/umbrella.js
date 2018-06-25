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
      _react2.default.createElement('path', { d: 'M12 2c-5 0-9 4-9 9h8v8c0 .6-.4 1-1 1s-1-.4-1-1H7c0 1.7 1.3 3 3 3s3-1.3 3-3v-8h8c0-5-4-9-9-9z' })
    )
  );
};

exports.default = Icon;