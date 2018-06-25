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
      _react2.default.createElement('path', { d: 'M16.5 11c1.9 0 3.5-1.6 3.5-3.5S18.4 4 16.5 4 13 5.6 13 7.5V9h-2V7.5C11 5.6 9.4 4 7.5 4S4 5.6 4 7.5 5.6 11 7.5 11H9v2H7.5C5.6 13 4 14.6 4 16.5S5.6 20 7.5 20s3.5-1.6 3.5-3.5V15h2v1.5c0 1.9 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5H15v-2h1.5zM15 7.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S17.3 9 16.5 9H15V7.5zm-6 9c0 .8-.7 1.5-1.5 1.5S6 17.3 6 16.5 6.7 15 7.5 15H9v1.5zM9 9H7.5C6.7 9 6 8.3 6 7.5S6.7 6 7.5 6 9 6.7 9 7.5V9zm4 4h-2v-2h2v2zm3.5 2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5V15h1.5z' })
    )
  );
};

exports.default = Icon;