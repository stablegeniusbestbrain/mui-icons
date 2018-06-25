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
      _react2.default.createElement('path', { d: 'M12 3C9.3 3 7.4 4.2 7.4 4.2L6 9h12l-1.4-4.8S14.7 3 12 3zm0 8c-2.7 0-6.6.5-6.9.6-1 .3-1.9.6-2.5.8-1 .4-1.6.6-1.6.6h22s-.6-.2-1.6-.6c-.7-.2-1.5-.5-2.6-.8 0 0-4-.6-6.8-.6zm-4.5 3C5.6 14 4 15.6 4 17.5S5.6 21 7.5 21s3.5-1.6 3.5-3.5V17c.3 0 .6-.1 1-.1s.7.1 1 .1v.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5c-1.5 0-2.7.9-3.2 2.2-.4-.1-.7-.2-1.3-.2s-.9.1-1.2.2C10.2 14.9 9 14 7.5 14zm0 1c1.4 0 2.5 1.1 2.5 2.5S8.9 20 7.5 20 5 18.9 5 17.5 6.1 15 7.5 15zm9 0c1.4 0 2.5 1.1 2.5 2.5S17.9 20 16.5 20 14 18.9 14 17.5s1.1-2.5 2.5-2.5z' })
    )
  );
};

exports.default = Icon;