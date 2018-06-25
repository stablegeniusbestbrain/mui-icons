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
      _react2.default.createElement('circle', { cx: '12', cy: '6', r: '1' }),
      _react2.default.createElement('path', { d: 'M19.8 12.1c.1-.3.2-.7.2-1.1 0-1.7-1.3-3-3-3h-.4c.3-.6.4-1.3.4-2 0-2.8-2.2-5-5-5S7 3.2 7 6c0 .7.2 1.4.4 2H7c-1.7 0-3 1.3-3 3 0 .4.1.8.2 1.1-.7.5-1.2 1.4-1.2 2.4 0 5 4 9 9 9s9-4 9-9c0-1-.5-1.9-1.2-2.4zM12 21.5c-3.9 0-7-3.1-7-7 0-.6.4-1 1-1s1 .4 1 1c0 2.4 1.7 4.4 4 4.9V12H7c-.6 0-1-.4-1-1s.4-1 1-1h4V8.8C9.8 8.4 9 7.3 9 6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.3-.8 2.4-2 2.8V10h4c.6 0 1 .4 1 1s-.4 1-1 1h-4v7.4c2.3-.5 4-2.5 4-4.9 0-.6.4-1 1-1s1 .4 1 1c0 3.9-3.1 7-7 7zM7.3 13H10v5c-1.2-.7-2-2-2-3.5 0-.6-.3-1.1-.7-1.5zm9.4 0c-.4.4-.7.9-.7 1.5 0 1.5-.8 2.8-2 3.5v-5h2.7z' }),
      _react2.default.createElement('circle', { cx: '12', cy: '6', r: '1' })
    )
  );
};

exports.default = Icon;