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
      _react2.default.createElement('path', { d: 'M12.1 24q-3.8 0-6.8-2T.9 16.6q-.8-1.7-.9-4t.4-4.4T1.9 4 4.3.7l-.2 3.8q.2-.2.9-.2t1 .2q.5-1.1 2.1-1.8t3.2-.8q-.8.6-1.7 2T8.9 6q.3.1.8.2t.8.1 1 .1.6 0q.2.1.2.6t-.4 1l-.3.3q-.2.2-.7.5t-1.4.4l.2 2.5-1.8-.9q-.3.6-.1 1.1t.4.9.9.6 1.1.1q.7-.1 1.3-.5t1.1-.6 1-.2q.8 0 1.2.4t.3.9l-.1.1-.1.1-.2.2q-.2.2-.4.2t-.7 0q-.8 1.3-1.9 1.8t-2.8.4q1 .8 2.2 1.1t2.2.1 2.1-.7 1.7-1.2 1.1-1.4q.6-1.2.5-2.6t-.5-2.5-1-1.7q1.1.6 1.8 1.1t1 1.5q.2-2.3-.7-4.6t-2.8-3.8Q20 2.7 22 5.4t2 6.9q0 1.7-.5 3.4t-1.7 3.2-2.5 2.6-3.3 1.8-3.9.7z' })
    )
  );
};

exports.default = Icon;