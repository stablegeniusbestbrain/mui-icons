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
      _react2.default.createElement('path', { d: 'M12 21c-2.5 0-4.6-.9-6.4-2.6C3.9 16.6 3 14.5 3 12c0-2.5.9-4.6 2.6-6.4C7.4 3.9 9.5 3 12 3c2.5 0 4.6.9 6.4 2.6C20.1 7.4 21 9.5 21 12c0 2.5-.9 4.6-2.6 6.4-1.8 1.7-3.9 2.6-6.4 2.6zm0-16c-2 0-3.6.7-5 2-1.3 1.4-2 3-2 5 0 1.9.7 3.6 2 4.9 1.4 1.4 3 2.1 5 2.1 1.9 0 3.6-.7 4.9-2.1 1.4-1.3 2.1-3 2.1-4.9 0-2-.7-3.6-2.1-5-1.3-1.3-3-2-4.9-2zm-3 9.5c-1.4 0-2.5-1.1-2.5-2.5S7.6 9.5 9 9.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm0-4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm6 4c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z' })
    )
  );
};

exports.default = Icon;