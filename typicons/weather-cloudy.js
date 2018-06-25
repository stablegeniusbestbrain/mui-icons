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
      _react2.default.createElement('path', { d: 'M17 19H6c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3-3.9V11c0-3.3 2.7-6 6-6 2.6 0 4.8 1.6 5.6 4 3-.2 5.4 2.1 5.4 5 0 2.8-2.2 5-5 5zM5.9 13c-1 0-1.9.9-1.9 2s.9 2 2 2h11c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.2 0-.5 0-.8.1l-1.1.3-.2-1.1C14.6 8.4 12.9 7 11 7c-2.2 0-4 1.8-4 4 0 .3 0 .5.1.8l.2 1.2H5.9z' })
    )
  );
};

exports.default = Icon;