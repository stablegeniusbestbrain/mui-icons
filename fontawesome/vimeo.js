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
      _react2.default.createElement('path', { d: 'M22.9 6.9q-.1 3.2-4.5 8.8-4.4 5.7-7.5 5.7-1.9 0-3.2-3.5-.6-2.1-1.8-6.4Q5 7.9 3.8 7.9q-.2 0-1.7 1.1l-1-1.4q.3-.2 1.4-1.2t1.8-1.6Q6.4 3 7.5 2.9q1.3-.2 2.1.7t1 2.7q.6 3.9.9 5 .8 3.4 1.6 3.4.7 0 2.1-2.2 1.4-2.2 1.5-3.3.1-1.9-1.5-1.9-.8 0-1.6.4 1.6-5.3 6.1-5.1 3.4.1 3.2 4.3z' })
    )
  );
};

exports.default = Icon;