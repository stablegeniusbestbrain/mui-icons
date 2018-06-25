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
      _react2.default.createElement('path', { d: 'M15.4 10.2q0 .8-.5 1.3t-1.3.5h-3.4V8.4h3.4q.7 0 1.3.5t.5 1.3zm2.4 0q0-1.7-1.2-3t-3-1.2H7.8v12h2.4v-3.6h3.4q1.7 0 3-1.2t1.2-3zM24 12q0 2.4-1 4.7t-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0t4.7 1 3.8 2.5T23 7.3t1 4.7z' })
    )
  );
};

exports.default = Icon;