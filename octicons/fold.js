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
      _react2.default.createElement('path', { d: 'M12 13.5l4.5 4.5h-3v4.5h-3V18h-3l4.5-4.5zm4.5-9h-3V0h-3v4.5h-3L12 9l4.5-4.5zm6 3c0-.8-.7-1.5-1.5-1.5h-3.7l-1.5 1.5h4.5l-3 3H6.8l-3-3h4.5L6.8 6H3c-.8 0-1.5.7-1.5 1.5l3.8 3.8L1.5 15c0 .8.7 1.5 1.5 1.5h3.8L8.3 15H3.8l3-3h10.5l3 3h-4.5l1.5 1.5H21c.8 0 1.5-.7 1.5-1.5l-3.7-3.7 3.7-3.8z' })
    )
  );
};

exports.default = Icon;