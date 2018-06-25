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
      _react2.default.createElement('path', { d: 'M19 12h3.3l-4.9 4.9-5-4.9H17c0-1.5-.6-3.1-1.8-4.2a5.8 5.8 0 0 0-8.4 0 5.8 5.8 0 0 0 0 8.4c1.8 1.9 4.6 2.3 6.8 1.2l1.5 1.5C12 20.7 8 20.3 5.3 17.7c-3.1-3.2-3.1-8.2.1-11.4 3.1-3.1 8.1-3.1 11.3 0C18.2 7.9 19 9.9 19 12z' })
    )
  );
};

exports.default = Icon;