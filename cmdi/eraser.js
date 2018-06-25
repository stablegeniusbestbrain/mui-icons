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
      _react2.default.createElement('path', { d: 'M16.2 3.6l5 4.9c.8.8.8 2.1 0 2.8L12 20.5c-1.6 1.6-4.1 1.6-5.7 0L2.8 17c-.8-.8-.8-2.1 0-2.8L13.4 3.6c.8-.8 2.1-.8 2.8 0zm-12 12l3.6 3.5c.7.8 2 .8 2.8 0l3.5-3.5-4.9-5-5 5z' })
    )
  );
};

exports.default = Icon;