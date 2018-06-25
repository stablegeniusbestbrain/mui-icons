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
      _react2.default.createElement('path', { d: 'M12 20c-3.9 0-7-3.1-7-7 0-1.3.3-2.5 1-3.5l9.5 9.5c-1 .6-2.2 1-3.5 1zM3 4L1.8 5.3 4.5 8C3.5 9.4 3 11.2 3 13c0 5 4 9 9 9 1.8 0 3.6-.6 5-1.5l2.5 2.5 1.3-1.3L13 14 3 4zm8 5.4l2 2V8h-2m4-7H9v2h6m4 1.5L17.6 6c-1.5-1.3-3.5-2-5.6-2-1.8 0-3.5.5-5 1.5l1.5 1.4c1-.6 2.2-.9 3.5-.9 3.9 0 7 3.1 7 7 0 1.3-.4 2.5-.9 3.5l1.4 1.4c.9-1.4 1.5-3.1 1.5-4.9 0-2.1-.7-4.1-2-5.6L20.5 6 19 4.5z' })
    )
  );
};

exports.default = Icon;