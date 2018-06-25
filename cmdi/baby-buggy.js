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
      _react2.default.createElement('path', { d: 'M13 2v8h8c0-4.4-3.6-8-8-8zm6.3 13.9c1.1-1.4 1.7-3.1 1.7-4.9H6.4l-.9-2H2v2h2.2s1.9 4.1 2.1 4.4c-1.1.6-1.8 1.8-1.8 3.1C4.5 20.4 6.1 22 8 22c1.8 0 3.2-1.3 3.5-3h2c.3 1.7 1.7 3 3.5 3 1.9 0 3.5-1.6 3.5-3.5 0-1-.5-2-1.2-2.6zM8 20c-.8 0-1.5-.7-1.5-1.5S7.2 17 8 17s1.5.7 1.5 1.5S8.8 20 8 20zm9 0c-.8 0-1.5-.7-1.5-1.5S16.2 17 17 17s1.5.7 1.5 1.5S17.8 20 17 20z' })
    )
  );
};

exports.default = Icon;