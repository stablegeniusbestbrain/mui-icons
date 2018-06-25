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
      _react2.default.createElement('path', { d: 'M12 16.5c-2.6 0-3.8-1.3-3.8-2.3 0-.5.3-.8.9-.8 1.1 0 .8 1.6 2.9 1.6 1.1 0 1.7-.6 1.7-1.2 0-.3-.2-.7-.9-.9l-2.3-.6c-2-.5-2.3-1.5-2.3-2.5 0-2 1.9-2.8 3.7-2.8 1.6 0 3.6.9 3.6 2.2 0 .5-.5.8-1 .8-1 0-.8-1.4-2.8-1.4-.9 0-1.5.5-1.5 1.1 0 .6.8.8 1.5 1l1.7.4c1.9.4 2.4 1.5 2.4 2.6 0 1.6-1.2 2.8-3.8 2.8zM18 6c2.1 2 2.8 4.9 2.4 7.5.4.8.6 1.6.6 2.5 0 2.8-2.2 5-5 5-.9 0-1.7-.2-2.5-.6-2.6.4-5.5-.3-7.5-2.4-2.1-2-2.8-4.9-2.4-7.5C3.2 9.7 3 8.9 3 8c0-2.8 2.2-5 5-5 .9 0 1.7.2 2.5.6 2.6-.4 5.5.3 7.5 2.4zM8 5C6.3 5 5 6.3 5 8c0 .8.3 1.5.8 2-.7 2.3-.2 4.8 1.6 6.6s4.3 2.3 6.6 1.6c.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2 .7-2.3.2-4.8-1.6-6.6S12.3 5.1 10 5.8C9.5 5.3 8.8 5 8 5z' })
    )
  );
};

exports.default = Icon;