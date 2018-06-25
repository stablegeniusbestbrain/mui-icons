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
      _react2.default.createElement('path', { d: 'M13.5 15.8L15 21H9l1.5-5.2-1.1-2.3h5.2l-1.1 2.3zm3-6.8h-9l-3 1.5h15l-3-1.5zM15 3l-3 1.5L9 3 7.5 7.5h9L15 3zm6 11.6l-4.5-1.1 1.5 3-3 4.5h4.8c.7 0 1.3-.5 1.5-1.1l.8-3.4c.2-.8-.3-1.7-1.1-1.9zM7.5 13.5L3 14.6c-.8.2-1.3 1.1-1.1 1.9l.8 3.4c.2.6.8 1.1 1.5 1.1H9l-3-4.5 1.5-3z' })
    )
  );
};

exports.default = Icon;