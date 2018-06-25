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
      _react2.default.createElement('path', { d: 'M8 11.5c0-.8-.7-1.5-1.5-1.5S5 10.7 5 11.5 5.7 13 6.5 13 8 12.3 8 11.5zm7-5c0-.8-.7-1.5-1.5-1.5h-3C9.7 5 9 5.7 9 6.5S9.7 8 10.5 8h3c.8 0 1.5-.7 1.5-1.5zM8.5 15c-.8 0-1.5.7-1.5 1.5S7.7 18 8.5 18s1.5-.7 1.5-1.5S9.3 15 8.5 15zM12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm5.5-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-2 5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;