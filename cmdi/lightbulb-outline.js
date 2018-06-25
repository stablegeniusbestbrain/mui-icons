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
      _react2.default.createElement('path', { d: 'M12 2c3.9 0 7 3.1 7 7 0 2.4-1.2 4.5-3 5.7V17c0 .5-.4 1-1 1H9c-.6 0-1-.5-1-1v-2.3C6.2 13.5 5 11.4 5 9c0-3.9 3.1-7 7-7zM9 21v-1h6v1c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1zm3-17C9.2 4 7 6.2 7 9c0 2.1 1.2 3.8 3 4.6V16h4v-2.4c1.8-.8 3-2.5 3-4.6 0-2.8-2.2-5-5-5z' })
    )
  );
};

exports.default = Icon;