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
      _react2.default.createElement('path', { d: 'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-1.8 0-3.6.6-4.9 1.7l11.2 11.2c1.1-1.3 1.7-3.1 1.7-4.9 0-4.4-3.6-8-8-8zm-8 8c0 4.4 3.6 8 8 8 1.8 0 3.6-.6 4.9-1.7L5.7 7.1C4.6 8.4 4 10.2 4 12z' })
    )
  );
};

exports.default = Icon;