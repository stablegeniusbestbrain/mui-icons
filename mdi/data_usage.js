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
      _react2.default.createElement('path', { d: 'M13 2v3.1c3.4.5 6 3.4 6 6.9 0 .9-.2 1.8-.5 2.5l2.6 1.6c.6-1.3.9-2.7.9-4.1 0-5.2-3.9-9.4-9-9.9zm-1 17c-3.9 0-7-3.1-7-7 0-3.5 2.6-6.4 6-6.9V2c-5.1.5-9 4.8-9 10 0 5.5 4.5 10 10 10 3.3 0 6.2-1.6 8.1-4.1l-2.7-1.5C16.2 18 14.2 19 12 19z' })
    )
  );
};

exports.default = Icon;