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
      _react2.default.createElement('path', { d: 'M12 3c-5 0-9 4-9 9H0l4 4 4-4H5c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7c-1.5 0-2.9-.5-4.1-1.3l-1.4 1.4C8 20.3 9.9 21 12 21c5 0 9-4 9-9s-4-9-9-9zm2 9c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z' })
    )
  );
};

exports.default = Icon;