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
      _react2.default.createElement('path', { d: 'M12 6c-1.2 0-2.2-1-2.2-2.2s1-2.3 2.2-2.3 2.3 1 2.3 2.3S13.2 6 12 6zm10.5 9c0 1.7-1.3 3-3 3H18c-1.7 0-3-1.3-3-3l3-6h-1.5c-.8 0-1.5-.7-1.5-1.5h-1.5v12c.6 0 1.5.7 1.5 1.5h1.5c.6 0 1.5.7 1.5 1.5H6c0-.8.9-1.5 1.5-1.5H9c0-.8.9-1.5 1.5-1.5v-12H9C9 8.3 8.3 9 7.5 9H6l3 6c0 1.7-1.3 3-3 3H4.5c-1.7 0-3-1.3-3-3l3-6H3V7.5h4.5C7.5 6.7 8.2 6 9 6h6c.8 0 1.5.7 1.5 1.5H21V9h-1.5l3 6zM5.3 10.5L3 15h4.5l-2.2-4.5zM21 15l-2.2-4.5-2.3 4.5H21z' })
    )
  );
};

exports.default = Icon;