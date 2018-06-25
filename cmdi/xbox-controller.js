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
      _react2.default.createElement('path', { d: 'M8.8 15.8C6.8 15.8 6 18 4 19c-2 0-3.5-3 .5-11.5h.3l.4-.8S8 5 9.3 6.2h5.4c1.3-1.2 4.1.5 4.1.5l.4.8h.3C23.5 16 22 19 20 19c-2-1-2.7-3.2-4.7-3.2H8.8zM12 7c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;