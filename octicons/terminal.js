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
      _react2.default.createElement('path', { d: 'M12 15h6v1.5h-6V15zm-4.5 1.5L12 12 7.5 7.5 6.4 8.6 9.8 12l-3.4 3.4 1.1 1.1zm15-12v15c0 .8-.7 1.5-1.5 1.5H3c-.8 0-1.5-.7-1.5-1.5v-15C1.5 3.7 2.2 3 3 3h18c.8 0 1.5.7 1.5 1.5zm-1.5 0H3v15h18v-15z' })
    )
  );
};

exports.default = Icon;