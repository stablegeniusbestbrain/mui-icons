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
      _react2.default.createElement('path', { d: 'M16.5 4C18.4 4 20 5.6 20 7.5S18.4 11 16.5 11H15v2h1.5c1.9 0 3.5 1.6 3.5 3.5S18.4 20 16.5 20 13 18.4 13 16.5V15h-2v1.5c0 1.9-1.6 3.5-3.5 3.5S4 18.4 4 16.5 5.6 13 7.5 13H9v-2H7.5C5.6 11 4 9.4 4 7.5S5.6 4 7.5 4 11 5.6 11 7.5V9h2V7.5C13 5.6 14.6 4 16.5 4M15 9h1.5c.8 0 1.5-.7 1.5-1.5S17.3 6 16.5 6 15 6.7 15 7.5V9M7.5 9H9V7.5C9 6.7 8.3 6 7.5 6S6 6.7 6 7.5 6.7 9 7.5 9m9 9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H15v1.5c0 .8.7 1.5 1.5 1.5m-9 0c.8 0 1.5-.7 1.5-1.5V15H7.5c-.8 0-1.5.7-1.5 1.5S6.7 18 7.5 18m9-16c-1.9 0-3.5.9-4.5 2.3C11 2.9 9.4 2 7.5 2 4.5 2 2 4.5 2 7.5c0 1.9.9 3.5 2.3 4.5C2.9 13 2 14.6 2 16.5c0 3 2.5 5.5 5.5 5.5 1.9 0 3.5-.9 4.5-2.3 1 1.4 2.6 2.3 4.5 2.3 3 0 5.5-2.5 5.5-5.5 0-1.9-.9-3.5-2.3-4.5 1.4-1 2.3-2.6 2.3-4.5 0-3-2.5-5.5-5.5-5.5zM13 11h-2v2h2z' })
    )
  );
};

exports.default = Icon;