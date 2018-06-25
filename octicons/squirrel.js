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
      _react2.default.createElement('path', { d: 'M18 1.5c-3.3 0-6 2-6 4.4 0 2.9.8 4.5 0 9.1 0-6.7-4.2-9.5-6-9.5.1-.8-.7-1-.7-1s-.3.2-.5.5c-.4-.5-.8-.4-.8-.4l-.2.9S1 6.4 1 10.3c.3.5 2.3.9 3.7.6 1.4.1 1 1.2.7 1.5C4.2 13.7 3 12 1.5 12s-1.5 1.5 0 1.5S3 15 6 15c-4.6 1.8 0 6 0 6H4.5C3 21 3 22.5 3 22.5h9c4.5 0 7.5-1.5 7.5-5.2 0-1.3-.6-2.7-1.5-3.8-1.7-2.2.3-4 1.5-3S24 12 24 7.5c0-3.3-2.7-6-6-6zM3.8 9c-.5 0-.8-.3-.8-.7s.3-.8.8-.8.7.3.7.8-.3.7-.7.7z' })
    )
  );
};

exports.default = Icon;