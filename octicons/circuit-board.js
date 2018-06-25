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
      _react2.default.createElement('path', { d: 'M6 7.5C6 6.7 6.7 6 7.5 6S9 6.7 9 7.5 8.3 9 7.5 9 6 8.3 6 7.5zm12 0c0-.8-.7-1.5-1.5-1.5S15 6.7 15 7.5 15.7 9 16.5 9 18 8.3 18 7.5zm0 9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zm3-15H9v3.3c.5.2 1 .7 1.2 1.2h3.6c.6-1.2 2-1.9 3.5-1.6 1.1.3 2 1.2 2.3 2.4.4 2-1.1 3.8-3.1 3.8-1.2 0-2.2-.6-2.8-1.6h-3.5c-.6 1.2-1.9 1.9-3.5 1.5-1.1-.2-2-1.1-2.2-2.2-.4-1.6.3-2.9 1.5-3.5V1.5H3c-.8 0-1.5.7-1.5 1.5v18c0 .8.7 1.5 1.5 1.5l7.5-7.5h3.3c.6-1.2 2-1.9 3.5-1.6 1.1.3 2 1.2 2.3 2.4.4 2-1.1 3.8-3.1 3.8-1.2 0-2.2-.6-2.8-1.6H12l-4.5 4.5H21c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5z' })
    )
  );
};

exports.default = Icon;