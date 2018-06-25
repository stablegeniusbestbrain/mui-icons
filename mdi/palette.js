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
      _react2.default.createElement('path', { d: 'M12 3c-5 0-9 4-9 9s4 9 9 9c.8 0 1.5-.7 1.5-1.5 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.8.7-1.5 1.5-1.5H16c2.8 0 5-2.2 5-5 0-4.4-4-8-9-8zm-5.5 9c-.8 0-1.5-.7-1.5-1.5S5.7 9 6.5 9 8 9.7 8 10.5 7.3 12 6.5 12zm3-4C8.7 8 8 7.3 8 6.5S8.7 5 9.5 5s1.5.7 1.5 1.5S10.3 8 9.5 8zm5 0c-.8 0-1.5-.7-1.5-1.5S13.7 5 14.5 5s1.5.7 1.5 1.5S15.3 8 14.5 8zm3 4c-.8 0-1.5-.7-1.5-1.5S16.7 9 17.5 9s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' })
    )
  );
};

exports.default = Icon;